import { withTranslation } from "next-i18next";
import { Component } from "react";
import Hashtag from "./Hashtag";

class HashtagTrans extends Component<any, any> {

    render() {
        const {t} = this.props;

        if (this.props.children?.toString()) {
            return <Hashtag link={this.props.link}
                            faIcon={this.props.faIcon}>{t(this.props.children.toString())}</Hashtag>
        }

        return;
    }
}

export default withTranslation()(HashtagTrans);
