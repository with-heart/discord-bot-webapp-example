import {signIn, useSession} from 'next-auth/react'
import {ReactNode, useEffect} from 'react'

export const Auth = ({children}: {children: ReactNode}) => {
  const {data: session} = useSession()

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn()
    }
  }, [session])

  if (session) {
    return <>{children}</>
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
