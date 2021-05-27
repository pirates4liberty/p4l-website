import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function About() {
    const {t} = useTranslation();

    const title = t("pages.about.title");

    return (
        <Content>
            <Head>
                <title>{title + " | Pirates4Liberty"}</title>
            </Head>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <ContentHeading>{title}</ContentHeading>

            <ContentBox>
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
