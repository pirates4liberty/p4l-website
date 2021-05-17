import "bootstrap/dist/css/bootstrap.css"
import { AppProps } from "next/app";
import "../styles/globals.scss"

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
