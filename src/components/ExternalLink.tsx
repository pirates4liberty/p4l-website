import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IExternalLink } from "../model/IExternalLink";

type Props = {
    data?: IExternalLink,
    title?: string,
    url?: string,
    className?: string,
    faIcon?: any
}

export default function ExternalLink(props: Props) {
    let data = props.data || {} as IExternalLink;

    data.title = props.title ?? data.title;
    data.url = props.url ?? data.url ?? "#";

    const icon = props.faIcon ? (<FontAwesomeIcon icon={props.faIcon} className="mr-2"/>) : "";

    return (
        <a href={data.url} target="_blank" className={props.className}>
            {icon}{data.title ?? data.url}
        </a>
    );
}
