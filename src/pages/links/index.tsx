import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { TranslationHelper } from "../../helpers/translationHelper";
import { ExternalLink } from "../../model/interfaces/link";

export default function Links() {
    const {t} = useTranslation();

    const links: ExternalLink[] = [
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
        <div className="bg-light">

            <div className="container content">
                <div className="row">
                    <div className="col-md-3">
                        <a className="btn btn-lg btn-primary my-3 d-block"
                           href="https://www.facebook.com/pirates4liberty.cz">
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>&nbsp;
                            {t("socialLinks.fbPage")}
                        </a>

                        <a className="btn btn-lg btn-primary my-3 d-block"
                           href="https://www.facebook.com/groups/pirates4liberty.cz">
                            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>&nbsp;
                            {t("socialLinks.fbDiscussGroup")}
                        </a>
                    </div>

                    <div className="col-md-9">
                        <div className="my-3 p-3 bg-white rounded shadow-sm">

                            <h2>{t("pages.links.partiesByStates")}</h2>

                            <ul>
                                {
                                    links.map(el => (
                                            <li key={el.title}>
                                                <a href={el.url} target="_blank">{t(el.title)}</a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const getStaticProps = TranslationHelper.getStaticProps();
