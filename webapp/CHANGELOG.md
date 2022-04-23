# webapp

## 0.2.0

### Minor Changes

- [#34](https://github.com/with-heart/discord-bot-webapp-example/pull/34)
  [`d57ecd9`](https://github.com/with-heart/discord-bot-webapp-example/commit/d57ecd903ffab96a9da68661f957b5f2b3808a34)
  Thanks [@with-heart](https://github.com/with-heart)! - Enabled Discord
  authentication in the app. This allows us to store and later retrieve the
  current user's Discord access token which will enable us to make calls to the
  Discord API.

  To retrieve session data in a React component or hook, use the `useSession`
  hook from `next-auth/react`:

  ```tsx
  import {useSession} from 'next-auth/react'

  const Example = () => {
    const {data: session} = useSession()

    return <p>Hello, {session.user.name}!</p>
  }
  ```

  To retrieve session data outside of React, use the `getSession` function from
  `next-auth/react`:

  ```tsx
  import {getSession} from 'next-auth/react'

  export default async function getUserDetails(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const session = await getSession({req: request})

    if (!session) {
      // no session; user needs to be authenticated
      return res.status(401)
    }

    return res.status(200).
  }
  ```
