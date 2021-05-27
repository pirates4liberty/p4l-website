import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
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
                            <a>{t("pages.terms.title")}</a>
                        </Link>
                        <> </>
                        |
                        <> </>
                        <a href="https://github.com/miloshavlicek/pirates4liberty"
                           rel="noreferrer"
                           target="_blank">
                            <FontAwesomeIcon icon={faGithub}/>&nbsp;
                            GitHub
                        </a>
                        <> </>
                        |
                        <> </>
                        <a href="https://matrix.to/#pirates4liberty:matrix.org?via=matrix.org"
                           rel="noreferrer"
                           target="_blank">
                            <FontAwesomeIcon icon={faComments}/>&nbsp;
                            Matrix (chat)
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
                    &nbsp;({t("footer.ifNotSpecified")})
                </p>
            </div>
        </footer>
    )
}
