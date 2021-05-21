import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

export class TranslationHelper {
    static getStaticProps(namespaces: string[] = ["common"]) {
        return async ({locale}: any) => ({
            props: {
                ...await serverSideTranslations(locale, namespaces, nextI18NextConfig),
            },
        });
    }
}
