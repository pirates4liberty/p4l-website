import { AppProps } from "next/app";
import "../../styles/globals.scss"
import Footer from "../components/footer";
import Header from "../components/header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <Header></Header>

            <Component {...pageProps} />

            <Footer></Footer>
        </div>
    )
}

export default MyApp
