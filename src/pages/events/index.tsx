import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Events() {
    const {t} = useTranslation();

    return (
        <Content>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {t("pages.events.title")}
                    </li>
                </ol>
            </nav>

            <ContentHeading faIcon={faCalendar}>
                {t("pages.events.title")}
            </ContentHeading>

            <ContentBox/>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
