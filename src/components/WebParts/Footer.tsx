import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer() {
    const {t} = useTranslation();

    return (
        <footer className="bd-footer p-3 p-md-5 mt-5 bg-white shadow-sm text-center text-sm-start">
            <div className="container">
                <ul className="bd-footer-links ps-0 mb-3">
                    <li className="d-inline-block">
                        <Link href={"/terms"}>
                            <a className="mx-3">
                                {t("pages.terms.title")}
                            </a>
                        </Link>

                        <a href="https://github.com/miloshavlicek/pirates4liberty"
                           rel="noreferrer"
                           target="_blank"
                           className="mx-3">
                            <FontAwesomeIcon icon={faGithub} className="mr-1"/>
                            GitHub
                        </a>

                        <a href="https://mastodon.social/@pirates4liberty"
                           rel="noreferrer"
                           target="_blank"
                           className="mx-3">
                            <FontAwesomeIcon icon={faUsers} className="mr-1"/>
                            Mastodon <small>(social network)</small>
                        </a>

                        <a href="https://matrix.to/#pirates4liberty:matrix.org?via=matrix.org"
                           rel="noreferrer"
                           target="_blank"
                           className="mx-3">
                            <FontAwesomeIcon icon={faComments} className="mr-1"/>
                            Matrix <small>(chat)</small>
                        </a>

                        <a href="https://www.linkedin.com/company/73202902/"
                           rel="noreferrer"
                           target="_blank"
                           className="mx-3">
                            <FontAwesomeIcon icon={faLinkedinIn} className="mr-1"/>
                            LinkedIn
                        </a>
                    </li>
                </ul>

                <p className="mb-0">
                    {t("footer.codeLicense")}:&nbsp;
                    <a href=" https://github.com/miloshavlicek/pirates4liberty-web/tree/main/LICENSE"
                       rel="license noopener noreferrer"
                       target="_blank">
                        MIT
                    </a>,
                    &nbsp;{t("footer.textContent")}:&nbsp;
                    <a href="https://creativecommons.org/licenses/by/3.0/"
                       rel="license noopener noreferrer"
                       target="_blank">
                        CC BY 3.0
                    </a>
                    <small className="ml-1">({t("footer.ifNotSpecified")})</small>
                </p>
            </div>
        </footer>
    )
}
