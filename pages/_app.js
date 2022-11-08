import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
    <title>Tom-Crude</title>
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />
    <meta name='keywords' content='draw, drawing, draws, picture, anime, manga, animation' />
    <meta name='author' content='Tom-Crude' />
    <meta name='description' content='A website where I show my artistic work' />
    <meta name='copyright' content='None' />
    <meta name='robots' content='index,follow, translate' />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  </Head>

  <Component {...pageProps}/>
   </>)
}

export default MyApp
