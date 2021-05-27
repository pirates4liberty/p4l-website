import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface IProject {
    id: string;
    title: string;
    website?: IExternalLink;
    fbGroups?: IExternalLink[];
    fbPages?: IExternalLink[];
    webSystems?: IExternalLink[];
    tags?: string[];
}

export interface IPirateParty {
    id: string;
    title: string;
    abbrev?: string;
    region?: string;
    fbGroups?: IExternalLink[];
    fbPages?: IExternalLink[];
    webSystems?: IExternalLink[];
    children?: IPirateParty[];
    parent?: IPirateParty;
    projects?: IProject[];
    links?: IExternalLink[];
    primaryLanguage?: string;
}

const PirateParties: IPirateParty[] = [
    {
        id: "international",
        title: "parties.international",
        abbrev: "PPI",
        links: [
            {
                url: "https://pp-international.net/",
                lang: "en",
                tags: ["website"]
            },
            {
                url: "https://en.wikipedia.org/wiki/Pirate_Parties_International",
                lang: "en",
                tags: ["wikipedia"]
            },
            {
                url: "https://cs.wikipedia.org/wiki/Internacion%C3%A1la_pir%C3%A1tsk%C3%BDch_stran",
                lang: "cz",
                tags: ["wikipedia"]
            }
        ],
        children: [
            {
                id: "eu",
                title: "parties.eu",
                primaryLanguage: 'en',
                links: [
                    {
                        title: "states.eu",
                        url: "https://european-pirateparty.eu/",
                        lang: "en",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "at",
                title: "parties.at",
                links: [
                    {
                        title: "states.at",
                        url: "https://piratenpartei.at/",
                        lang: "at",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "pl",
                title: "parties.pl",
                links: [
                    {
                        title: "states.pl",
                        url: "https://polskapartiapiratow.pl/",
                        lang: "pl",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "be",
                title: "parties.be"
            },
            {
                id: "ba",
                title: "parties.ba"
            },
            {
                id: "br",
                title: "parties.br",
                links: [
                    {
                        url: "https://partidopirata.org/",
                        lang: "br",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "bg",
                title: "parties.bg"
            },
            {
                id: "cat",
                title: "parties.cat"
            },
            {
                id: "cl",
                title: "parties.cl",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party_of_Chile",
                        lang: "en",
                        tags: ["wikipedia"]
                    },
                    {
                        url: "https://www.partidopirata.cl/",
                        lang: "cl",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "cz",
                title: "parties.cz",
                primaryLanguage: 'cz',
                links: [
                    {
                        url: "https://www.pirati.cz/",
                        lang: "cz",
                        tags: ["website"]
                    },
                    {
                        url: "https://www.twitter.com/PiratskaStrana",
                        lang: "cz",
                        tags: ["twitter"]
                    },
                    {
                        url: "https://www.instagram.com/pirati.cz/",
                        lang: "cz",
                        tags: ["instagram"]
                    },
                    {
                        url: "https://www.pirati.cz/feed.xml",
                        lang: "cz",
                        tags: ["rss/atom"]
                    }
                ],
                fbGroups: [
                    {
                        title: "Piráti v médiích",
                        url: "https://www.facebook.com/groups/346867865761153",
                        tags: ["unofficial"]
                    },
                    {
                        title: "PIRÁTI HLÍDAJÍ PIRÁTY",
                        url: "https://www.facebook.com/groups/1362574270514956",
                        tags: ["unofficial"]
                    },
                    {
                        title: "Pirátská dobrovolná výměna informací",
                        url: "https://www.facebook.com/groups/548746252525598",
                        tags: ["unofficial"]
                    },
                    {
                        title: "Supertajnánekvotováskupinatopsecretvoe",
                        url: "https://www.facebook.com/groups/2017699364980792",
                        tags: ["unofficial"]
                    }
                ],
                fbPages: [
                    {
                        title: "Česká pirátská strana",
                        url: "https://www.facebook.com/ceska.piratska.strana",
                        tags: ["official"]
                    },
                ],
                webSystems: [
                    {
                        title: "Fórum Pirátské strany",
                        url: "https://forum.pirati.cz/"
                    },
                    {
                        title: "Pirátský profil",
                        url: "https://profil.pirati.cz/"
                    },
                    {
                        title: "Mastodon",
                        url: "https://mastodon.pirati.cz/"
                    },
                    {
                        title: "Zulip",
                        url: "https://zulip.pirati.cz/"
                    },
                    {
                        title: "Wiki",
                        url: "https://wiki.pirati.cz/"
                    },
                    {
                        title: "Redmine",
                        url: "https://redmine.pirati.cz/"
                    },
                    {
                        title: "Pirátské listy",
                        url: "https://www.piratskelisty.cz/"
                    },
                    {
                        title: "Pirátský obchod (e-shop)",
                        url: "https://www.piratskyobchod.cz/"
                    },
                    {
                        title: "Registr smluv",
                        url: "https://smlouvy.pirati.cz/"
                    },
                    {
                        title: "Evidence lobystických kontaktů",
                        url: "https://smlouvy.pirati.cz/"
                    },
                    {
                        title: "Otevřené účetnictví",
                        url: "https://piroplaceni.pirati.cz/"
                    }
                ],
                children: [
                    {
                        id: "cz-praha",
                        title: "KS Praha",
                        children: [
                            {
                                id: "cz-praha-1",
                                title: "MS Praha 1",
                                fbGroups: [
                                    {
                                        title: "Piráti Praha 1",
                                        url: "https://www.facebook.com/groups/httpspraha1.pirati.cz/",
                                        tags: ["official"]
                                    }
                                ]
                            },
                            {
                                id: "cz-praha-2",
                                title: "MS Praha 2"
                            },
                            {
                                id: "cz-praha-3",
                                title: "MS Praha 3"
                            },
                            {
                                id: "cz-praha-4",
                                title: "MS Praha 4"
                            },
                            {
                                id: "cz-praha-5",
                                title: "MS Praha 5"
                            },
                            {
                                id: "cz-praha-6",
                                title: "MS Praha 6"
                            },
                            {
                                id: "cz-praha-7",
                                title: "MS Praha 7"
                            },
                            {
                                id: "cz-praha-8",
                                title: "MS Praha 8"
                            },
                            {
                                id: "cz-praha-9",
                                title: "MS Praha 9"
                            },
                            {
                                id: "cz-praha-10",
                                title: "MS Praha 10"
                            },
                            {
                                id: "cz-praha-11",
                                title: "MS Praha 11"
                            },
                            {
                                id: "cz-praha-12",
                                title: "MS Praha 12"
                            },
                            {
                                id: "cz-praha-13",
                                title: "MS Praha 13"
                            },
                            {
                                id: "cz-praha-14",
                                title: "MS Praha 14"
                            },
                            {
                                id: "cz-praha-21",
                                title: "MS Praha 21"
                            },
                            {
                                id: "cz-praha-reporyje",
                                title: "MS Praha - Řeporyje"
                            }
                        ],
                        fbGroups: [
                            {
                                title: "Piráti - Praha",
                                url: "https://www.facebook.com/groups/125479366717/",
                                tags: ["official"]
                            }
                        ]
                    },
                    {
                        id: "cz-jc",
                        title: "KS Jihočeský kraj"
                    },
                    {
                        id: "cz-jm",
                        title: "KS Jihomoravský kraj"
                    },
                    {
                        id: "cz-kv",
                        title: "KS Karlovarský kraj"
                    },
                    {
                        id: "cz-hk",
                        title: "KS Královéhradecké kraj"
                    },
                    {
                        id: "cz-lib",
                        title: "KS Liberecký kraj"
                    },
                    {
                        id: "cz-ms",
                        title: "KS Moravskoslezský kraj"
                    },
                    {
                        id: "cz-ol",
                        title: "KS Olomoucký kraj"
                    },
                    {
                        id: "cz-par",
                        title: "KS Pardubický kraj"
                    },
                    {
                        id: "cz-plz",
                        title: "KS Plzeňský kraj"
                    },
                    {
                        id: "cz-sc",
                        title: "KS Středočeský kraj"
                    },
                    {
                        id: "cz-uk",
                        title: "KS Ústecký kraj"
                    },
                    {
                        id: "cz-vys",
                        title: "KS Vysočina",
                        children: [
                            {
                                id: "cz-vys-hab",
                                title: "MS Havlíčkův Brod",
                                abbrev: "VYS-HaB"
                            },
                            {
                                id: "cz-vys-jih",
                                title: "MS Jihlavsko",
                                abbrev: "VYS-Jih"
                            },
                            {
                                id: "cz-vys-pel",
                                title: "MS Pelhřimov",
                                abbrev: "VYS-Pel"
                            },
                            {
                                id: "cz-vys-te",
                                title: "MS Telčsko",
                                abbrev: "VYS-Te"
                            },
                            {
                                id: "cz-vys-trb",
                                title: "MS Třebíčsko",
                                abbrev: "VYS-Trb"
                            },
                        ]
                    },
                    {
                        id: "cz-zk",
                        title: "KS Zlínský kraj"
                    }
                ],
                projects: [
                    {
                        id: "cz-seniori",
                        title: "Senioři na palubě",
                        fbGroups: [
                            {
                                title: "Senioři na palubě",
                                url: "https://www.facebook.com/groups/seniorinapalube"
                            }
                        ],
                        tags: ["official"]
                    },
                    {
                        id: "cz-rovne-sance",
                        title: "Rovné šance",
                        fbGroups: [
                            {
                                title: "Genderfuck Pirátské soirée aneb rovnost všem",
                                url: "https://www.facebook.com/groups/2454582831467775",
                                tags: ["official"]
                            }
                        ],
                        tags: ["official"]
                    },
                    {
                        id: "cz-elearning",
                        title: "Pirátský elearning",
                        fbPages: [
                            {
                                title: "Pirátský e-learning",
                                url: "https://www.facebook.com/piratskyelearning/",
                                tags: ["official"]
                            }
                        ],
                        tags: ["official"]
                    },
                    {
                        id: "p4l",
                        title: "Pirates for Liberty",
                        fbGroups: [
                            {
                                title: "Fórum Pirates for Liberty CZ",
                                url: "https://www.facebook.com/groups/260715082460013",
                                tags: ["official"]
                            }
                        ],
                        tags: ["unofficial"]
                    },
                    {
                        id: "piratskatelevize",
                        title: "Pirátská televize",
                        tags: ["unofficial"],
                        website: {
                            url: "https://piratskatelevize.cz/"
                        }
                    }
                ]
            },
            {
                id: "ee",
                title: "parties.ee",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Estonian_Pirate_Party",
                        lang: "en",
                        tags: ["wikipedia"]
                    },
                    {
                        url: "https://piraadipartei.ee/",
                        lang: "ee",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "fr",
                title: "parties.fr",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party_(France)",
                        lang: "en",
                        tags: ["wikipedia"]
                    },
                    {
                        url: "https://partipirate.org/",
                        lang: "fr",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "de",
                title: "parties.de",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party_Germany",
                        lang: "en",
                        tags: ["wikipedia"]
                    },
                    {
                        url: "https://www.piratenpartei.de/",
                        lang: "de",
                        tags: ["website"]
                    }
                ]
            },
            {
                id: "gr",
                title: "parties.de",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party_of_Greece",
                        lang: "en",
                        tags: ["wikipedia"]
                    },
                    {
                        url: "https://www.pirateparty.gr/",
                        lang: "gr",
                        tags: ["website"]
                    },
                ]
            },
            {
                id: "hu",
                title: "parties.hu",
                links: [
                    {
                        url: "https://en.wikipedia.org/wiki/Pirate_Party_of_Hungary",
                        lang: "en",
                        tags: ["wikipedia"]
                    }
                ]
            },
            {
                id: "sk",
                title: "parties.sk",
                links: [
                    {
                        title: "states.sk",
                        url: "https://www.slovenskipirati.sk/",
                        tags: ["website"]
                    }
                ]
            }
        ]
    }
];

export class PiratePartiesRepository extends CachedRepository<IPirateParty> {

    protected processItem = (item: IPirateParty) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        if (copy.title) {
            copy.title = t(copy.title);
        }

        copy.links?.forEach(link => {
            if (link?.title) {
                link.title = t(link.title);
            }
        })

        return copy;
    }

    protected fetchAll() {
        return PirateParties;
    }
}
