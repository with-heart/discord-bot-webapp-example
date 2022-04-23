import {SessionProvider} from 'next-auth/react'
import type {AppProps} from 'next/app'
import {Auth} from '../components/auth'

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  )
}

export default MyApp
