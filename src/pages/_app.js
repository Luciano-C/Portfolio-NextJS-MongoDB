import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import { PortfolioProvider } from "../context/PortfolioContext"
import { Layout } from "../components/Layout"

/* Importing JS is not easy as CSS. If we directly import JS like CSS we will run into error which would say window and document is not defined. 
This is because window and document are client side objects, while Next.js renders HTML on Client side as well as server side. 
Hence to avoid such errors we will dynamically import JS using useEffect() hook. */

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])


  return (
    <PortfolioProvider>
      <Layout>
        <div className='bg-dark'>
          <Component {...pageProps} />
        </div>

      </Layout>
    </PortfolioProvider>

  )
}

export default MyApp
