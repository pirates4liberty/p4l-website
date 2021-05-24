import { useTranslation } from "next-i18next";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function About() {
    const {t} = useTranslation();

    return (
        <Content>
            <ContentBox title={t("pages.about.title")}>
                <p className="fw-bold">
                    {t("pages.about.p1")}
                </p>
                <p>
                    {t("pages.about.p2")}
                </p>
                <p>
                    {t("pages.about.p3")}
                </p>
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
