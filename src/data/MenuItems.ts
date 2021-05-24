export interface IMenuItem {
    title: string;
    url: string;
}

export const MenuItems: IMenuItem[] = [
    {
        title: "pages.home.title",
        url: "/"
    },
    {
        title: "pages.links.title",
        url: "/links"
    },
    {
        title: "pages.events.title",
        url: "/events"
    },
    {
        title: "pages.news.title",
        url: "/news"
    },
    {
        title: "pages.about.title",
        url: "/about"
    }
];
