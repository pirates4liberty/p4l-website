import { useTranslation } from "next-i18next";
import Parser from "rss-parser";
import { RssFeed, RssItem } from "../../tools/Rss/NewsLoader";
import ContentBox from "../uni/Content/ContentBox";
import LinkExternal from "../uni/LinkExternal";

export type RssSource = {
    id: string;
    title?: string;
    rssFeed: string;
    parties?: string[];
    data?: RssFeed & Parser.Output<RssItem>;
}

interface Props {
    sources?: RssSource[],
    topics?: string[]
}

export default function NewsFeed(props: Props) {
    const {t} = useTranslation();

    let items: any[] = [];

    props.sources?.forEach(source => {
        if (source.data) {
            items = items.concat(source.data.items);
        }
    })

    return (
        <>
            {/*<NewsFeedFilters sources={props.sources} topics={props.topics}/>*/}

            <div className={"row"}>
                {
                    items && items.map((item: any, i: number) =>
                        <div className={"col-md-6 my-1"} key={i}>
                            <ContentBox title={item.title}>
                                <div className={"text-right"}>
                                    <span
                                        className={"mr-4"}>{t("pages.news.source")}: {new URL(item.link).hostname}</span>
                                    <LinkExternal url={item.link}
                                                  className={"btn btn-dark"}
                                                  title={t("btn.readMore") + "…"}/>
                                </div>
                            </ContentBox>
                        </div>
                    )
                }
            </div>
        </>
    );
}
