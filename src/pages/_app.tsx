import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app";
import Head from "next/head";

import nextI18NextConfig from "../../next-i18next.config.js"
import "../../styles/globals.scss"
import Footer from "../components/WebParts/Footer";
import Header from "../components/WebParts/Header";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <>
            <Head>
                <title>{"Pirates4Liberty"}</title>
            </Head>

            <Header/>

            <Component {...pageProps}/>

            <Footer/>
        </>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
