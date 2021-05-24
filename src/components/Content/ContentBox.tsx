type Props = {
    title?: string,
    children?: any
}

export default function ContentBox(props: Props) {
    return (
        <div className="p-3 my-3 bg-white rounded shadow-sm">
            {
                props.title &&
                <h2>{props.title}</h2>
            }
            {props.children}
        </div>
    );
}
