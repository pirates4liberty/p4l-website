import { useTranslation } from "next-i18next";
import { deepCopy } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";

export interface IMenuItem {
    title: string;
    url?: string;
    children?: IMenuItem[]
}

const data: IMenuItem[] = [
    {
        title: "pages.home.title",
        url: "/"
    },
    {
        title: "pages.links.title",
        url: "/links",
        children: [
            {
                title: "pages.recommendations.title",
                url: "/recommendations"
            },
        ]
    },
    // {
    //     title: "pages.events.title",
    //     url: "/events"
    // },
    {
        title: "pages.news.title",
        url: "/news"
    },
    {
        title: "pages.about.title",
        url: "/about"
    }
];


export class MenuItemsRepository extends CachedRepository<IMenuItem> {

    protected processItem = (item: IMenuItem) => {
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
