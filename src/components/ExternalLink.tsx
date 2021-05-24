import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/interfaces/IExternalLink";

type Props = {
    data?: IExternalLink,
    title?: string,
    url?: string
}

export default function ExternalLink(props: Props) {

    const {t} = useTranslation();

    let data = props.data;

    if (!data) {
        data = {
            title: props.title,
            url: props.url || "#"
        };
    }

    return (
        <a href={data.url} target="_blank">{data.title ? t(data.title) : data.url}</a>
    );
}
