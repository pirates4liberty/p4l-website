import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export type OpinionType = "higher" | "yes" | "equal" | "unknown" | "neutral" | "no" | "lower";

export interface IIdeologyOpinion {
    id: string;
    opinion?: OpinionType;
    description?: string;
    tags?: string[];
    sources?: IExternalLink[];
}

export interface IIdeology {
    id: string;
    title: string;
    opinions: IIdeologyOpinion[];
    tags?: string[];
}

export const ideologyCategories: {
    id: string;
    opinions: { id: string }[];
}[] = [
    {
        id: "general",
        opinions: [
            {
                id: "liberalPrefer"
            },
            {
                id: "decentralization"
            },
            {
                id: "privacy"
            },
            {
                id: "envProtection"
            }
        ]
    },
    {
        id: "individual",
        opinions: [
            {
                id: "freeSpeech"
            },
            {
                id: "copyrightReform"
            },
            {
                id: "patentReform"
            },
            {
                id: "deregulationDrugs"
            },
            {
                id: "liberalGunPolicy"
            },
            {
                id: "sameSexMarriage"
            }
        ]
    },
    {
        id: "technology",
        opinions: [
            {
                id: "communicationPrivacy"
            },
            {
                id: "cryptoPositive"
            },
            {
                id: "netNeutrality"
            }
        ]
    },
    {
        id: "state",
        opinions: [
            {
                id: "transparentState"
            },
            {
                id: "stateAdminEfficiency"
            },
            {
                id: "schoolLiberalization"
            },
            {
                id: "subsidiarity"
            },
            {
                id: "participativeBudget"
            },
            {
                id: "euPositive"
            }
        ]
    },
    {
        id: "social",
        opinions: [
            {
                id: "charitySupport"
            },
            {
                id: "socialState"
            }
        ]
    },
    {
        id: "economy",
        opinions: [
            {
                id: "dutyFree"
            },
            {
                id: "largeComSubsidies"
            },
            {
                id: "largeComRegulations"
            },
            {
                id: "euMoneyPositive"
            }
        ]
    }
]

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
                opinion: "no",
                description: "ideology.libertarians.socialPolicyDesc"
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
            },
            {
                id: "euPositive",
                opinion: "no"
            },
            {
                id: "euMoneyPositive",
                opinion: "no"
            },
            {
                id: "stateAdminEfficiency",
                opinion: "yes"
            },
            {
                id: "privacy",
                opinion: "neutral"
            },
            {
                id: "subsidiarity",
                opinion: "yes"
            },
            {
                id: "dutyFree",
                opinion: "yes"
            },
            {
                id: "envProtection",
                opinion: "neutral"
            },
            {
                id: "copyrightReform",
                opinion: "yes"
            },
            {
                id: "patentReform",
                opinion: "yes"
            },
            {
                id: "charitySupport",
                opinion: "yes"
            },
            {
                id: "participativeBudget",
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
                opinion: "yes",
                description: "ideology.pirates.socialPolicyDesc",
                sources: [
                    {
                        title: "Pirate Party - Wikipedia",
                        lang: "en",
                        url: "https://en.wikipedia.org/wiki/Pirate_Party"
                    }
                ]
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
            },
            {
                id: "euPositive",
                opinion: "yes"
            },
            {
                id: "euMoneyPositive",
                opinion: "yes"
            },
            {
                id: "stateAdminEfficiency",
                opinion: "yes"
            },
            {
                id: "privacy",
                opinion: "yes"
            },
            {
                id: "subsidiarity",
                opinion: "yes"
            },
            {
                id: "dutyFree",
                opinion: "yes"
            },
            {
                id: "envProtection",
                opinion: "yes"
            },
            {
                id: "copyrightReform",
                opinion: "yes"
            },
            {
                id: "patentReform",
                opinion: "yes"
            },
            {
                id: "charitySupport",
                opinion: "yes"
            },
            {
                id: "participativeBudget",
                opinion: "yes"
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
