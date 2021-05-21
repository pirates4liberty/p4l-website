import { useTranslation } from "next-i18next";
import { TranslationHelper } from "../../helpers/translationHelper";

export default function About() {
    const {t} = useTranslation();

    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="p-3 bg-white rounded shadow-sm">
                    <h2>{t("pages.about.title")}</h2>
                    <p className="fw-bold">
                        {t("pages.about.p1")}
                    </p>
                    <p>
                        {t("pages.about.p2")}
                    </p>
                    <p>
                        {t("pages.about.p3")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();