import Parser from "rss-parser";
import { RssSource } from "../../components/NewsFeed/NewsFeed";

export type RssFeed = {};
export type RssItem = {};

export class NewsLoader {

    private parser: Parser<RssFeed, RssItem> = new Parser({});

    constructor(
        private sources: RssSource[]
    ) {
    }

    async loadAllFeeds(): Promise<void> {
        // TODO: caching
        await Promise.all(
            this.sources.map(
                async (source) => {
                    source.data = await this.parser.parseURL(source.rssFeed);
                }
            )
        );
    }

}
