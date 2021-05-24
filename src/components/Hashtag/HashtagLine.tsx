import { Component } from "react";
import { IHashtag } from "../../model/interfaces/IHashtag";
import Hashtag from "./Hashtag";
import HashtagTrans from "./HashtagTrans";

export default class HashtagLine extends Component<any, any> {
    render() {
        const hashtags = this.props.hashtags;

        return <div>
            {
                hashtags.map((hashtag: IHashtag, i: number) => {
                    if (hashtag.hashtag) {
                        return <Hashtag key={i}
                                        link={hashtag.link}
                                        faIcon={hashtag.faIcon}>{hashtag.hashtag}</Hashtag>
                    } else if (hashtag.hashtagTrans) {
                        return <HashtagTrans key={i}
                                             link={hashtag.link}
                                             faIcon={hashtag.faIcon}>{hashtag.hashtagTrans}</HashtagTrans>
                    }
                })
            }
        </div>
    }
}
