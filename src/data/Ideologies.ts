import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export type OpinionType = "yes" | "no";

export interface IIdeologyOpinion {
    id: string,
    opinion?: OpinionType,
    tags?: string[];
    sources?: IExternalLink[];
}

export interface IIdeology {
    id: string;
    title: string;
    opinions: IIdeologyOpinion[];
    tags?: string[];
}

const data: IIdeology[] = [
    {
        id: "libertarians",
        title: "ideologies.libertarians",
        opinions: [
            {
                id: "liberalPrefer",
                opinion: "yes"
            },
            {
                id: "decentralization",
                opinion: "yes"
            },
            {
                id: "transparentState",
                opinion: "yes"
            },
            {
                id: "sameSexMarriage",
                opinion: "yes"
            },
            {
                id: "deregulationDrugs",
                opinion: "yes"
            },
            {
                id: "socialState",
                opinion: "no"
            },
            {
                id: "largeComSubsidies",
                opinion: "no"
            },
            {
                id: "largeComRegulations",
                opinion: "no"
            },
            {
                id: "schoolLiberalization",
                opinion: "yes"
            },
            {
                id: "freeSpeech",
                opinion: "yes"
            },
            {
                id: "freeSpeech",
                opinion: "yes"
            },
            {
                id: "communicationPrivacy",
                opinion: "yes"
            },
            {
                id: "cryptoPositive",
                opinion: "yes"
            },
            {
                id: "netNeutrality",
                opinion: "no"
            }
        ]
    },
    {
        id: "pirates",
        title: "ideologies.pirates",
        opinions: [
            {
                id: "liberalPrefer",
                opinion: "yes"
            },
            {
                id: "decentralization",
                opinion: "yes"
            },
            {
                id: "transparentState",
                opinion: "yes",
                sources: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party",
                        lang: "en",
                        title: "Pirate Party - Wikipedia"
                    },
                    {
                        url: "https://pp-international.net/about-ppi/",
                        lang: "en",
                        title: "ABOUT PPI – Pirate Parties International"
                    }
                ]
            },
            {
                id: "sameSexMarriage",
                opinion: "yes"
            },
            {
                id: "deregulationDrugs",
                opinion: "yes"
            },
            {
                id: "socialState",
                opinion: "yes"
            },
            {
                id: "largeComSubsidies",
                opinion: "no"
            },
            {
                id: "largeComRegulations",
                opinion: "yes"
            },
            {
                id: "schoolLiberalization",
                opinion: "yes",
                sources: [
                    {
                        url: "https://vzdelavani2030.cz/",
                        lang: "cz",
                        title: "Vize vzdělávání 2030 - Pirátská strana"
                    }
                ]
            },
            {
                id: "freeSpeech",
                opinion: "yes",
                tags: ["warning"]
            },
            {
                id: "communicationPrivacy",
                opinion: "yes"
            },
            {
                id: "cryptoPositive",
                opinion: "yes"
            },
            {
                id: "netNeutrality",
                opinion: "yes",
                sources: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party",
                        lang: "en",
                        title: "Pirate Party - Wikipedia"
                    }
                ]
            }
        ]
    }
];

export class IdeologiesRepository extends CachedRepository<IIdeology> {

    protected processItem = (item: IIdeology) => {
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
