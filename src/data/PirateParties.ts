import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface IPirateParty {
    id: string;
    title: string;
    region?: string;
    website?: IExternalLink;
    fbGroups?: IExternalLink[];
}

const PirateParties: IPirateParty[] = [
    {
        id: "cz",
        title: "parties.cz",
        website: {
            title: "states.cz",
            url: "https://www.pirati.cz/"
        },
        fbGroups: [
            {
                title: "Piráti v médiích",
                url: "https://www.facebook.com/groups/346867865761153"
            },
            {
                title: "PIRÁTI HLÍDAJÍ PIRÁTY",
                url: "https://www.facebook.com/groups/1362574270514956"
            },
            {
                title: "Pirátská dobrovolná výměna informací",
                url: "https://www.facebook.com/groups/548746252525598"
            },
            {
                title: "Supertajnánekvotováskupinatopsecretvoe",
                url: "https://www.facebook.com/groups/2017699364980792"
            },
            {
                title: "Piráti - Praha",
                url: "https://www.facebook.com/groups/125479366717/"
            }
        ]
    },
    {
        id: "sk",
        title: "parties.sk",
        website: {
            title: "states.sk",
            url: "https://www.slovenskipirati.sk/"
        }
    },
    {
        id: "at",
        title: "parties.at",
        website: {
            title: "states.at",
            url: "https://piratenpartei.at/"
        }
    },
    {
        id: "pl",
        title: "parties.pl",
        website: {
            title: "states.pl",
            url: "https://polskapartiapiratow.pl/"
        }
    }
];

export class PiratePartiesRepository extends CachedRepository<IPirateParty> {

    protected processItem = (item: IPirateParty) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        if (copy.title) {
            copy.title = t(copy.title);
        }

        if (copy.website?.title) {
            copy.website.title = t(copy.website.title);
        }

        return copy;
    }

    protected fetchAll() {
        return PirateParties;
    }

}
