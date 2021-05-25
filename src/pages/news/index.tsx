import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ExternalLink from "../../components/ExternalLink";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

type RssFeed = { foo: string };
type RssItem = { bar: number };

const parser: Parser<RssFeed, RssItem> = new Parser({});

async function loadFeed(): Promise<RssFeed & Parser.Output<RssItem>> {
    return await parser.parseURL("https://www.pirati.cz/feed.xml");
}

export default function News(props: any) {
    const {t} = useTranslation();

    const [feed, setFeed] = useState<any>(null);

    useEffect(() => {
        if (!feed) {
            // setFeed(loadFeed()); // CORS error
        }
    }, []);

    const sources = [
        {
            title: "Pirati.cz",
            rssFeed: "https://www.pirati.cz/feed.xml",
            parties: ["cz"]
        },
        {
            title: "KS Vysočina",
            rssFeed: "https://vysocina.pirati.cz/feed.xml",
            parties: ["cz-vys"]
        }
    ]

    // TODO: Topics: E.g. Belarus, EU

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
                        {t("pages.news.title")}
                    </li>
                </ol>
            </nav>

            <h2>
                <b>{t("pages.news.title")}</b>
            </h2>

            <div>
                <span className={"font-weight-bold mr-2"}>Zdroje:</span>
                {
                    sources.map(source =>
                        <span className={"btn btn-secondary m-1"}>{source.title}</span>
                    )
                }
            </div>

            <div className={"row"}>
                {
                    props.feed.items && props.feed.items.map((item: any, i: number) =>
                        <div className={"col-md-6 my-1"} key={i}>
                            <ContentBox title={item.title}>
                                <div className={"text-right"}>
                                    <span
                                        className={"mr-4"}>{t("pages.news.source")}: {new URL(item.link).hostname}</span>
                                    <ExternalLink url={item.link} className={"btn btn-dark"}
                                                  title={t("btn.readMore") + "…"}/>
                                </div>
                            </ContentBox>
                        </div>
                    )
                }
            </div>
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    const out = await StaticProps.default()(context);

    out.props.feed = await loadFeed();

    return out;
});
