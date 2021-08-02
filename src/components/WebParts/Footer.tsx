import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { IExternalLink } from "../../model/IExternalLink";
import LinkExternal from "../uni/LinkExternal";

export default function Footer() {
    const {t} = useTranslation();

    const extLinks: IExternalLink[] = [
        {
            url: "https://github.com/miloshavlicek/pirates4liberty",
            faIcon: faGithub,
            title: "GitHub"
        },
        {
            url: "https://mastodon.social/@pirates4liberty",
            faIcon: faUsers,
            title: "Mastodon",
            titleSub: "(social network)"
        },
        {
            url: "https://matrix.to/#pirates4liberty:matrix.org?via=matrix.org",
            faIcon: faComments,
            title: "Matrix",
            titleSub: "(chat)"
        },
        {
            url: "https://www.linkedin.com/company/73202902/",
            faIcon: faLinkedinIn,
            title: "LinkedIn"
        }
    ]

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
                        {
                            extLinks.map((extLink, i) =>
                                <LinkExternal key={i} data={extLink} className="mx-3"/>
                            )
                        }
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
