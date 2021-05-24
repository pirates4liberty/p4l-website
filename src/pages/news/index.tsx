import { useTranslation } from "next-i18next";
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

    return (
        <Content>
            <ContentBox title={t("pages.news.title")}/>
            {
                props.feed.items && props.feed.items.map((item: any, i: number) =>
                    <ContentBox title={item.title} key={i}>
                        <div className={"text-right"}>
                            <span className={"mr-4"}>{t("pages.news.source")}: {new URL(item.link).hostname}</span>
                            <ExternalLink url={item.link} className={"btn btn-dark"} title={"Číst dále…"}/>
                        </div>
                    </ContentBox>
                )
            }
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    const out = await StaticProps.default()(context);

    out.props.feed = await loadFeed();

    return out;
});
