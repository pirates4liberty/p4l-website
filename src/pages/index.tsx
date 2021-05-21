import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { faClipboardCheck, faRoute, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link"
import nextI18NextConfig from "../../next-i18next.config";
import { TranslationHelper } from "../helpers/translationHelper";

export default function Home() {
    const {t} = useTranslation();

    const hashtagsList = [
        {
            hashtag: 'hashtags.liberty',
        },
        {
            hashtag: 'hashtags.liberalisation',
        },
        {
            hashtag: 'hashtags.deregulation',
        }
    ];

    const valuesList = [
        {
            faIcon: faRoute,
            title: "values.liberty"
        },
        {
            faIcon: faClipboardCheck,
            title: "values.stateTransparency"
        },
        {
            faIcon: faEnvira,
            title: "values.environment"
        },
        {
            faIcon: faUsers,
            title: "values.solidarity"
        }
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

            <div className="container py-5">
                <div className="p-3 bg-white rounded shadow-sm text-center fw-bold" style={{fontSize: "1.5em"}}>

                    <span className="mx-2">#{t("hashtags.liberty")}</span>
                    <span className="mx-2">#{t("hashtags.liberalisation")}</span>
                    <span className="mx-2">#{t("hashtags.deregulation")}</span>
                    <br/>
                    <Link href="/links">
                        <a className="mx-2">
                            #{t("hashtags.pirates")}
                        </a>
                    </Link>
                    <span className="mx-2">#{t("hashtags.responsibility")}</span>
                    <span className="mx-2">#{t("hashtags.discussion")}</span>
                    <span className="mx-2">#{t("hashtags.hatefree")}</span>
                    <br/>
                    <span className="mx-2">#{t("hashtags.opensource")}</span>
                    <span className="mx-2">#{t("hashtags.crowdfunding")}</span>
                    <span className="mx-2">#{t("hashtags.voluntariness")}</span>
                </div>

                <div className="p-3 bg-white rounded shadow-sm text-center fw-bold" style={{fontSize: "1.5em"}}>
                    {
                        valuesList.map(el => (
                            <span className="mx-2" key={el.title}>
                                <FontAwesomeIcon icon={el.faIcon}></FontAwesomeIcon>&nbsp;
                                {t(el.title)}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();
