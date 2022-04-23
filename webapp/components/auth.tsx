import {signIn, useSession} from 'next-auth/react'
import {ReactNode} from 'react'

export const Auth = ({children}: {children: ReactNode}) => {
  const {data: session} = useSession()

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
