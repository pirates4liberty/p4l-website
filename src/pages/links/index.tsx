import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ExternalLink from "../../components/ExternalLink";
import { TranslationHelper } from "../../helpers/translationHelper";
import { IExternalLink } from "../../model/interfaces/IExternalLink";

export default function Links() {
    const {t} = useTranslation();

    const links: IExternalLink[] = [
        {
            title: "states.cz",
            url: "https://www.pirati.cz/"
        },
        {
            title: "states.sk",
            url: "https://www.slovenskipirati.sk/"
        },
        {
            title: "states.at",
            url: "https://piratenpartei.at/"
        },
        {
            title: "states.pl",
            url: "https://polskapartiapiratow.pl/"
        },
    ];

    return (
        <Content>
            <div className="row">
                <div className="col-md-3">
                    <a className="btn btn-lg btn-primary my-3 d-block"
                       href="https://www.facebook.com/pirates4liberty.cz">
                        <FontAwesomeIcon icon={faFacebookF} />&nbsp;
                        {t("socialLinks.fbPage")}
                    </a>

                    <a className="btn btn-lg btn-primary my-3 d-block"
                       href="https://www.facebook.com/groups/pirates4liberty.cz">
                        <FontAwesomeIcon icon={faComments} />&nbsp;
                        {t("socialLinks.fbDiscussGroup")}
                    </a>
                </div>

                <div className="col-md-9">
                    <ContentBox title={t("pages.links.partiesByStates")}>
                        <ul>
                            {
                                links.map(link => (
                                        <li key={link.title}>
                                            <ExternalLink data={link}/>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </ContentBox>
                </div>

            </div>
        </Content>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();
