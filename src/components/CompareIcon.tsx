import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons/faQuestionCircle";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons/faWindowClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OpinionType } from "../data/Ideologies";

class Props {
    opinion?: OpinionType;
    negative?: boolean;
    colors?: string[]
}

export default function CompareIcon(props: Props) {
    let positivityColors = props.colors || [
        "success",
        "secondary",
        "warning",
        "danger"
    ];

    if (props.negative) {
        positivityColors = positivityColors.reverse();
    }

    switch (props.opinion) {
        case "higher":
            return <FontAwesomeIcon icon={faArrowUp}
                                    className={"text-" + positivityColors[0]}/>
        case "yes":
            return <FontAwesomeIcon icon={faCheckCircle}
                                    className={"text-" + positivityColors[0]}/>
        case "equal":
            return <FontAwesomeIcon icon={faArrowCircleRight}
                                    className={"text-" + positivityColors[2]}/>
        case "no":
            return <FontAwesomeIcon icon={faWindowClose}
                                    className={"text-" + positivityColors[3]}/>
        case "lower":
            return <FontAwesomeIcon icon={faArrowDown}
                                    className={"text-" + positivityColors[3]}/>
        case "neutral":
            return <span className={"bange badge-pill badge-" + positivityColors[1]}>N</span>
        case "unknown":
        default:
            return <FontAwesomeIcon icon={faQuestionCircle}
                                    className={"text-" + positivityColors[1]}/>
    }
}
