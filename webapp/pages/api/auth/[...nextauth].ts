import NextAuth from 'next-auth'
import {JWT} from 'next-auth/jwt'
import DiscordProvider from 'next-auth/providers/discord'

const SCOPES = ['identify'].join(' ')

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: {params: {scope: SCOPES}},
    }),
  ],
  callbacks: {
    async jwt({token, account, user}) {
      // initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at! * 1000,
          refreshToken: account.refresh_token,
          user,
        }
      }

      // return existing token because it's not expired
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token
      }

      // token expired so try to update it
      return refreshAccessToken(token)
    },
    async session({session, token}) {
      // @ts-expect-error
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error

      return session
    },
  },
})
async function refreshAccessToken(token: JWT) {
  try {
    const url = 'https://discord.com/api/oauth2/token'
    const body = new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID!,
      client_secret: process.env.DISCORD_CLIENT_SECRET!,
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken as string,
    }).toString()

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
      method: 'POST',
    })

    const refreshedTokens = await response.json()

    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires:
        Date.now() + (refreshedTokens.expires_in as number) * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    }
  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}
