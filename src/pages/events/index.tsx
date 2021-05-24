import { useTranslation } from "next-i18next";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Events() {
    const {t} = useTranslation();

    return (
        <Content>
            <ContentBox title={t("pages.events.title")}/>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
