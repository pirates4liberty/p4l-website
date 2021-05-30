import { CSSProperties, ReactNode } from "react";

type Props = {
    title?: string,
    children?: ReactNode,
    className?: string,
    style?: CSSProperties
}

export default function ContentBox(props: Props) {
    return (
        <div className={props.className} style={props.style}>
            <div className={"p-3 my-3 bg-white rounded shadow-sm"}>
                {
                    props.title &&
                    <h2>{props.title}</h2>
                }
                {props.children}
            </div>
        </div>
    );
}
