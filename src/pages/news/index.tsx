import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentHeading from "../../components/Content/ContentHeading";
import NewsFeed, { RssSource } from "../../components/NewsFeed/NewsFeed";
import { TopicsRepository } from "../../data/Topics";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";
import { NewsLoader } from "../../tools/Rss/NewsLoader";

const sources: RssSource[] = [
    {
        id: "cz-pirati",
        title: "Pirati.cz",
        rssFeed: "https://www.pirati.cz/feed.xml",
        parties: ["cz"]
    },
    // {
    //     id: "cz-pirati-pracuji",
    //     title: "Piráti pracují.cz",
    //     rssFeed: "https://www.pirati.cz/feed.xml",
    //     parties: ["cz"]
    // },
    // {
    //     id: "cz-ks-vysocina",
    //     title: "KS Vysočina",
    //     rssFeed: "https://vysocina.pirati.cz/feed.xml",
    //     parties: ["cz-vys"]
    // }
];

export default function News(props: any) {
    const {t} = useTranslation();

    const title = t("pages.news.title");

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

            <ContentHeading faIcon={faNewspaper}>
                {title}
            </ContentHeading>

            <NewsFeed sources={props.sources} topics={props.topics}/>
        </Content>
    )
}

export const getStaticProps = (async (context: any) => {
    const out = await StaticProps.default()(context);

    await (new NewsLoader(sources)).loadAllFeeds();
    out.props.sources = sources;

    out.props.topics = (new TopicsRepository()).getAll(false, false);

    return out;
});
