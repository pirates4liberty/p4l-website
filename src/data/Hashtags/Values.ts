import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faClipboardCheck, faRoute, faUsers } from "@fortawesome/free-solid-svg-icons";
import { IHashtag } from "../../model/Hashtag";
import { HashtagsRepository } from "./Hashtags";

const data: IHashtag[][] = [
    [
        {
            faIcon: faRoute,
            hashtag: "values.liberty"
        },
        {
            faIcon: faClipboardCheck,
            hashtag: "values.stateTransparency"
        },
        {
            faIcon: faEnvira,
            hashtag: "values.environment"
        },
        {
            faIcon: faUsers,
            hashtag: "values.solidarity"
        }
    ]
];

export class ValuesRepository extends HashtagsRepository {
    protected fetchAll() {
        return data;
    }
}
