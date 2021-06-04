import { IExternalLink } from "../model/IExternalLink";
import { deepCopy } from "../tools/Helpers/Tools";
import { ITranslatableString, translateArray } from "../tools/Helpers/Translatable";
import { CachedRepository } from "../tools/Repository/CachedRepository";

interface IImage {
    url: string;
    tags?: string[];
}

export interface IBook {
    id: string;
    title: ITranslatableString[];
    titleTranslated?: string;
    description?: ITranslatableString[];
    descriptionTranslated?: string;
    imgs?: IImage[],
    buy?: IExternalLink[];
    languages?: string[];
    tags?: string[];
}

const data: IBook[] = [
    {
        id: "pokrok-bez-povolenia",
        title: [
            {
                lang: "sk",
                value: "Pokrok bez povolenia"
            },
            {
                lang: "cz",
                value: "Pokrok bez povolení"
            }
        ],
        buy: [
            {
                title: "martinus.cz",
                url: "https://www.martinus.cz/?uItem=682065",
                lang: "sk"
            },
            {
                title: "grada.cz",
                url: "https://www.grada.cz/pokrok-bez-povoleni-9510/",
                lang: "cz"
            }
        ],
        imgs: [
            {
                url: "book-pokrok.jpg"
            }
        ]
    },
    {
        id: "anarchokapitalismus",
        title: [
            {
                lang: "cz",
                value: "Anarchokapitalismus"
            }
        ],
        buy: [
            {
                title: "kosmas.cz",
                url: "https://www.kosmas.cz/knihy/251711/anarchokapitalismus/",
                lang: "cz"
            }
        ],
        imgs: [
            {
                url: "ankap.jpg"
            }
        ]
    }
];

export class BooksRepository extends CachedRepository<IBook> {

    protected processItem = (item: IBook) => {
        const copy = deepCopy(item);

        copy.titleTranslated = translateArray(item.title);

        if (item.description) {
            copy.descriptionTranslated = translateArray(item.description);
        }

        return copy;
    }

    protected fetchAll() {
        return data;
    }
}
