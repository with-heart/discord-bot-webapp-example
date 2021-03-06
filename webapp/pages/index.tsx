import type {NextPage} from 'next'
import {useSession} from 'next-auth/react'
import Head from 'next/head'

const Home: NextPage = () => {
  const session = useSession().data!

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Discord Bot Webapp</h1>
        <p>Hello, {session.user!.name}!</p>
      </main>
    </div>
  )
}

export default Home
