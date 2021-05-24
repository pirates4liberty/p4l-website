import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"

interface Props {
    faIcon?: any,
    children?: any,
    link?: string
}

export default function Hashtag(props: Props) {
    let hashtag;
    if (props.faIcon) {
        hashtag = <FontAwesomeIcon icon={props.faIcon} className="mr-2"></FontAwesomeIcon>
    } else {
        hashtag = <>#</>;
    }

    let out = <span className="mx-2">{hashtag}{props.children?.toString()}</span>

    if (props.link) {
        out = <Link href={props.link}>{out}</Link>
    }

    return out;
}
