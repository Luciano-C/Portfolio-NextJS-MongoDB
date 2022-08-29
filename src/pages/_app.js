import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import { PortfolioProvider } from "../context/PortfolioContext"
import { Layout } from "../components/Layout"
import Head from 'next/head'

// Configuración para íconos font-awesome en NextJS (ver documentación) 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

/* Importing JS is not easy as CSS. If we directly import JS like CSS we will run into error which would say window and document is not defined. 
This is because window and document are client side objects, while Next.js renders HTML on Client side as well as server side. 
Hence to avoid such errors we will dynamically import JS using useEffect() hook. */

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])


  return (
    <>
      <Head>
        <title>Luciano Cabrales</title>
        <link rel="shortcut icon" href="/lcf.ico" />
      </Head>

      <PortfolioProvider>
        <Layout>
          <div className='bg-dark text-white container-fluid'>
            <Component {...pageProps} />
          </div>
        </Layout>
      </PortfolioProvider>
    </>

  )
}

export default MyApp
