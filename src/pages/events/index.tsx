import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Content from "../../components/uni/Content/Content";
import ContentBox from "../../components/uni/Content/ContentBox";
import ContentHeading from "../../components/uni/Content/ContentHeading";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Events() {
    const {t} = useTranslation();

    const title = t("pages.events.title");

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
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <ContentHeading faIcon={faCalendar}>
                {title}
            </ContentHeading>

            <ContentBox>
                <iframe
                    src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=MONTH&amp;height=300&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=1i5s4rpq519gs9cpf1i4j96m3s%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=Europe%2FPrague"
                    style={{"border": 0, "width": "100%"}} height="600" frameBorder="0" scrolling="no"/>
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
