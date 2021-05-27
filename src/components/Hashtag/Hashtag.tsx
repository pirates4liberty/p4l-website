import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link"
import { IHashtag } from "../../model/IHashtag";

interface Props {
    data?: IHashtag,
    faIcon?: any,
    link?: string
    children?: any,
}

function init(props: Props) {
    const {t} = useTranslation();

    let data = Object.assign({}, props.data);

    if (!data) {
        data = {
            faIcon: props.faIcon,
            link: props.link
        };
    }

    if (!data.hashtag) {
        data.hashtag = props.children?.toString();
    }

    return data;
}

function getHashtagSign(data: IHashtag) {
    if (data.faIcon) {
        return <FontAwesomeIcon icon={data.faIcon} className="mr-2"/>
    }

    return <>#</>;
}

export default function Hashtag(props: Props) {
    const data = init(props);

    let out = <span className="mx-1">{getHashtagSign(data)}{data.hashtag}</span>

    if (data.link) {
        out = <Link href={data.link}><a>{out}</a></Link>
    }

    return <> {out} </>;
}
