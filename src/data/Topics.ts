import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface ITopic {
    id: string;
    title: string;
    links?: IExternalLink[];
    filter?: (item: any) => void,
    tags?: string[]
}

const data: ITopic[] = [
    {
        id: "eu",
        title: "topics.eu",
        links: [],
        tags: ["regional"]
    },
    {
        id: "russia",
        title: "topics.russia",
        links: [],
        tags: ["regional"]
    },
    {
        id: "belarus",
        title: "topics.belarus",
        links: [],
        tags: ["regional"]
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
                description: "Matrix is open decentralized network for secure communication. Alternative to Messanger / WhatsApp / Signal etc.",
                url: "https://matrix.org/",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "Signal",
                description: "Signal is a cross-platform end-to-end encrypted messaging service. Unlike regular communicators, no one but you and the recipients can read your messages.",
                url: "https://signal.org/en/",
                lang: "en",
                tags: ["recommended"]
            },
            {
                title: "Bitcoin",
                description: "Bitcoin is a decentralized open-source digital currency. It's an alternative to ordinary state money.",
                url: "https://en.wikipedia.org/wiki/Bitcoin",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "Jitsi",
                description: "Jitsi is a free open-source software for online video conferences. It's an alternative to Google Maps / Bing Maps / Apple Maps etc.",
                url: "https://jitsi.org/",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "Mastodon",
                description: "Social network alternative to Twitter. No ads, no corporate surveillance, ethical design, and decentralization! Own your data with Mastodon!",
                url: "https://joinmastodon.org/",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "PeerTube",
                description: "PeerTube is a free decentralized alternative to YouTube or Vimeo.",
                url: "https://joinpeertube.org/",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "GitLab",
                description: "GitLab is an open-source software development platform. It's an alternative to GitHub.",
                url: "https://about.gitlab.com/",
                lang: "en",
                tags: ["recommended:top"]
            },
            {
                title: "OpenStreetMap",
                description: "OpenStreetMap is a free collaborative alternative to Google Maps / Bing Maps / Apple Maps etc.",
                url: "https://www.openstreetmap.org/",
                lang: "en",
                tags: ["recommended"]
            },
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
        return data;
    }
}
