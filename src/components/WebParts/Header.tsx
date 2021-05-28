import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link"
import React, { BaseSyntheticEvent } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MenuItems } from "../../data/MenuItems";

function onLangChange(e: BaseSyntheticEvent) {
    i18n?.changeLanguage(e.target.value);
}

export default function Header() {
    const {t} = useTranslation();
    const menuItems = MenuItems;

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mr-auto">
                        {
                            menuItems.map(menuItem => (
                                <li key={menuItem.title}>
                                    <Link href={menuItem.url}>
                                        <a className="nav-link px-2 text-white">
                                            {t(menuItem.title)}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        <OverlayTrigger placement="bottom"
                                        overlay={<Tooltip id="1">{t("socialLinks.fbPage")}</Tooltip>}>
                            <a href="https://www.facebook.com/pirates4liberty"
                               target="_blank"
                               rel="noreferrer"
                               className="btn btn-primary mx-1 d-inline-block">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </OverlayTrigger>

                        <OverlayTrigger placement="bottom"
                                        overlay={<Tooltip id="2">{t("socialLinks.fbDiscussGroup")}</Tooltip>}>
                            <a href="https://www.facebook.com/groups/pirates4liberty"
                               target="_blank"
                               rel="noreferrer"
                               className="btn btn-warning mx-2 d-inline-block">
                                <FontAwesomeIcon icon={faComments}/>
                            </a>
                        </OverlayTrigger>

                        <div className="d-inline-block mt-1">
                            <select className="form-control" value={i18n?.language} onChange={onLangChange}>
                                {["en", "cz"].map(lang => (
                                    <option key={lang} value={lang}>
                                        {lang.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
