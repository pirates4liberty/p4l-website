import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    children?: any,
    className?: string,
    faIcon?: any
}

export default function ContentHeading(props: Props) {
    let icon = <></>

    if (props.faIcon) {
        icon = <FontAwesomeIcon icon={props.faIcon} className={"mr-3"}></FontAwesomeIcon>;
    }

    return (
        <h2 className={"font-weight-bold " + props.className}>
            {icon}{props.children}
        </h2>
    );
}
