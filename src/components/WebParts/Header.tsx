import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18n from "i18next";
import { useTranslation } from "next-i18next";
import Link from "next/link"
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Menu } from "../../model/menu";

export default function Header() {
    const menuItems = Menu.items;
    const {t} = useTranslation();

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mr-auto">
                        {
                            menuItems.map(el => (
                                <li key={el.title}>
                                    <Link href={el.url}>
                                        <a className="nav-link px-2 text-white">
                                            {t(el.title)}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="1">{t("socialLinks.fbPage")}</Tooltip>}>
                            <a href="https://www.facebook.com/pirates4liberty.cz"
                               target="_blank"
                               className="btn btn-primary mx-1 d-inline-block">
                                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            </a>
                        </OverlayTrigger>

                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="2">{t("socialLinks.fbDiscussGroup")}</Tooltip>}>
                            <a href="https://www.facebook.com/groups/pirates4liberty.cz"
                               target="_blank"
                               className="btn btn-warning mx-2 d-inline-block">
                                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                            </a>
                        </OverlayTrigger>

                        <div className="d-inline-block mt-1">
                            <select className="form-control" defaultValue={i18n.language}>
                                <option onClick={() => i18n.changeLanguage("cs")}>CZ</option>
                                <option onClick={() => i18n.changeLanguage("en")}>EN</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
