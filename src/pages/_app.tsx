import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app";

import nextI18NextConfig from "../../next-i18next.config.js"
import "../../styles/globals.scss"
import Footer from "../components/footer";
import Header from "../components/header";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <Header></Header>

            <Component {...pageProps} />

            <Footer></Footer>
        </>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
