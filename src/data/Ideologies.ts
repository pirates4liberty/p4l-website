import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export type OpinionType = "higher" | "yes" | "equal" | "unknown" | "neutral" | "no" | "lower";

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
            },
            {
                id: "liberalGunPolicy",
                opinion: "yes"
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
                tags: ["warning"],
                sources: [
                    {
                        url: "https://forum.pirati.cz/viewtopic.php?f=544&t=57272",
                        lang: "cz",
                        title: "Svoboda projevu vs podmínky platformy (EU regulace) - Fórum Pirátské strany"
                    }
                ]
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
            },
            {
                id: "liberalGunPolicy",
                opinion: "equal",
                sources: [
                    {
                        url: "https://www.pirati.cz/program/psp2017/vnitro/",
                        lang: "cz",
                        title: "Vnitro a otevřený stát"
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
