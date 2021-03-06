import { appWithTranslation, useTranslation } from "next-i18next"
import { AppProps } from "next/app";
import Head from "next/head";

import nextI18NextConfig from "../../next-i18next.config.js"
import "../../styles/globals.scss"
import Footer from "../components/WebParts/Footer";
import Header from "../components/WebParts/Header";

function MyApp({Component, pageProps}: AppProps) {

    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t("app.title")}</title>
                <meta property="og:image" content={"https://pirates4liberty.cz/img/carousel/p4l_cover_en_img_web.jpg"}/>
            </Head>

            <Header/>

            <Component {...pageProps}/>

            <Footer/>
        </>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
