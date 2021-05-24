import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faClipboardCheck, faRoute, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";
import Content from "../components/Content/Content";
import ContentBox from "../components/Content/ContentBox";
import HashtagBox from "../components/Hashtag/HashtagBox";
import { TranslationHelper } from "../helpers/translationHelper";

export default function Home() {
    const {t} = useTranslation();

    const hashtags = [
        [
            {hashtagTrans: "hashtags.liberty"},
            {hashtagTrans: "hashtags.liberalisation"},
            {hashtagTrans: "hashtags.deregulation"}
        ],
        [
            {hashtagTrans: "hashtags.pirates", link: "/links"},
            {hashtagTrans: "hashtags.responsibility"},
            {hashtagTrans: "hashtags.discussion"},
            {hashtagTrans: "hashtags.hatefree"}
        ],
        [
            {hashtagTrans: "hashtags.opensource"},
            {hashtagTrans: "hashtags.crowdfunding"},
            {hashtagTrans: "hashtags.voluntariness"},
            {hashtagTrans: "hashtags.evidenceBasedPolicy"}
        ],
    ];

    const values = [
        [
            {
                faIcon: faRoute,
                hashtagTrans: "values.liberty"
            },
            {
                faIcon: faClipboardCheck,
                hashtagTrans: "values.stateTransparency"
            },
            {
                faIcon: faEnvira,
                hashtagTrans: "values.environment"
            },
            {
                faIcon: faUsers,
                hashtagTrans: "values.solidarity"
            }
        ]
    ];

    return (
        <div className="bg-light">
            <div className="cover">
                <div className="container">
                    <a href="https://www.facebook.com/groups/pirates4liberty.cz">
                        <img src="pirates4liberty_cover_text1.png"/>
                    </a>
                </div>
            </div>

            <div className="notice-line">
                <div className="container">
                    {t("notices.notPolitical")}
                </div>
            </div>

            <Content className="text-center fw-bold" style={{fontSize: "1.5em"}}>
                <ContentBox>
                    <HashtagBox hashtags={hashtags} className="mb-4"/>
                    <HashtagBox hashtags={values}/>
                </ContentBox>
            </Content>
        </div>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();
