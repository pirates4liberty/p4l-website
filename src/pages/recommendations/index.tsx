import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import RecommendationsList from "../../components/WebParts/RecommendationsList";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Recommendations() {
    const {t} = useTranslation();

    const title = t("pages.recommendations.title");

    return (
        <Content>
            <Head>
                <title>{title + " | " + t("app.title")}</title>
            </Head>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href={"/links"}>
                            <a>{t("pages.links.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <ContentHeading>
                {title}
            </ContentHeading>
            <ContentBox>
                <RecommendationsList/>
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
