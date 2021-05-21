import { useTranslation } from "next-i18next";
import { TranslationHelper } from "../../helpers/translationHelper";

export default function Events() {
    const {t} = useTranslation();

    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="p-3 bg-white rounded shadow-sm">
                    <h2>{t("pages.events.title")}</h2>

                </div>
            </div>
        </div>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();
