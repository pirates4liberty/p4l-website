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
                title: "Matrix",
                description: "Matrix is open decentralized network for secure communication.",
                url: "https://matrix.org/",
                lang: "en",
                tags: ['recommended:top']
            },
            {
                title: "Signal",
                description: "Signal is a cross-platform end-to-end encrypted messaging service. Unlike regular communicators, no one but you and the recipients can read your messages.",
                url: "https://signal.org/en/",
                lang: "en",
                tags: ['recommended']
            },
            {
                title: "Mastodon",
                description: "Social network alternative to Twitter. No ads, no corporate surveillance, ethical design, and decentralization! Own your data with Mastodon!",
                url: "https://joinmastodon.org/",
                lang: "en",
                tags: ['recommended:top']
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
    {
        id: "cryptocurrencies",
        title: "topics.cryptocurrencies",
        links: [
            {
                title: "Pracovní skupina kryptoměny - Fórum Pirátské strany",
                url: "https://forum.pirati.cz/viewtopic.php?f=554&t=38605",
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
