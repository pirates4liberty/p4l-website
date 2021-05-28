import { useTranslation } from "next-i18next";

export type RssSource = {
    id: string;
    title?: string;
    rssFeed: string;
    parties?: string[];
}

interface Props {
    sources?: RssSource[],
    topics?: any[]
}

export default function NewsFeedFilters(props: Props) {
    const {t} = useTranslation();

    return (
        <>
            {
                props.sources &&
                <div>
                    <span className={"font-weight-bold mr-2"}>Zdroje:</span>

                    <span className={"btn btn-secondary btn-sm m-1"}>Vše</span>

                    {
                        props.sources.map(source =>
                            <span className={"btn btn-secondary btn-sm m-1"}>{source.title}</span>
                        )
                    }
                </div>
            }

            {
                props.topics &&
                <div>
                    <span className={"font-weight-bold mr-2"}>Témata:</span>

                    <span className={"btn btn-secondary btn-sm m-1"}>Vše</span>

                    {
                        props.topics.map(topic =>
                            <span className={"btn btn-secondary btn-sm m-1"}>{t(topic.title)}</span>
                        )
                    }
                </div>
            }
        </>
    );
}
