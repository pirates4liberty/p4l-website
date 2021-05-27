import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface ITopic {
    id: string;
    title: string;
    links?: IExternalLink[];
}

const Topics: ITopic[] = [
    {
        id: "eu",
        title: "topics.eu",
        links: []
    },
    {
        id: "russia",
        title: "topics.russia",
        links: []
    },
    {
        id: "belarus",
        title: "topics.belarus",
        links: []
    },
    {
        id: "state-transparency",
        title: "topics.stateTransparency",
        links: []
    },
    {
        id: "environment",
        title: "topics.environment",
        links: []
    },
    {
        id: "solidarity",
        title: "topics.solidarity",
        links: []
    },
    {
        id: "vaccination",
        title: "topics.vaccination",
        links: []
    },
    {
        id: "opensource",
        title: "topics.opensource",
        links: [
            {
                title: "Signal",
                description: "Signal is a cross-platform end-to-end encrypted messaging service. Unlike regular communicators, no one but you and the recipients can read your messages.",
                url: "https://signal.org/en/",
                lang: "en"
            },
            {
                title: "Matrix",
                description: "Matrix is open decentralized network for secure communication.",
                url: "https://matrix.org/",
                lang: "en"
            }
        ]
    },
    {
        id: "school_system",
        title: "topics.schoolSystem",
        links: [
            {
                title: "Piráti a Starostové: Volební program 2021 - Výuka žáky připraví na život a bude je bavit",
                url: "https://vzdelavani2030.cz/",
                lang: "cz",
                tags: ["parties:cz"]
            },
            {
                title: "Vize vzdělávání 2030",
                url: "https://vzdelavani2030.cz/",
                lang: "cz",
                tags: ["parties:cz"]
            }
        ]
    },
];

export class TopicsRepository extends CachedRepository<ITopic> {

    protected processItem = (item: ITopic) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        if (copy.title) {
            copy.title = t(copy.title);
        }

        return copy;
    }

    protected fetchAll() {
        return Topics;
    }
}
