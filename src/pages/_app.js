import Head from 'next/head'
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Links Clebson Augusto Fonseca</title>
        <meta name="description" content="Links Clebson Augusto Fonseca" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
      )
}

export default MyApp
