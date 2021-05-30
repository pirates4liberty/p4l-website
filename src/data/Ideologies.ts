import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface IIdeologyOpinion {
    id: string,
    opinion?: "yes" | "no",
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
            }
        ]
    },
    {
        id: "pirates",
        title: "ideologies.pirates",
        opinions: [
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