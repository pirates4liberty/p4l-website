import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import Content from "../../components/uni/Content/Content";
import ContentBox from "../../components/uni/Content/ContentBox";
import ContentHeading from "../../components/uni/Content/ContentHeading";
import LinkExternal from "../../components/uni/LinkExternal";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function About() {
    const {t} = useTranslation();

    const title = t("pages.teams.title");

    return (
        <Content>
            <Head>
                <title>{title + " | " + t("app.title")}</title>
            </Head>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {title}
                    </li>
                </ol>
            </nav>

            <ContentHeading>
                <FontAwesomeIcon icon={faUsers} className={"mr-2"}/>
                {t("pages.teams.workgroups")}
            </ContentHeading>

            Pracovní skupiny jsou zaměřeny na řešení úzce specifikovaného problému. Jejich organizace je do určité míry
            nezávislá.

            <div className="row">
                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Prac. skupina proti EU kontrole komunikace
                        </h3>

                        <b>Jazyk:</b> CZ

                        <div className={"mb-2"}>
                            <span className="badge badge-success">Otevřený přístup</span>
                        </div>

                        <LinkExternal url="https://matrix.to/#chatcontrol-cz:matrix.org">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faComments}
                                    className={"mr-2"}/>
                                Vstoupit
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>

                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Pracovní skupina proti regulacím kryptoměn
                        </h3>

                        <b>Jazyk:</b> EN

                        <div className={"mb-2"}>
                            <span className="badge badge-success">Otevřený přístup</span>
                        </div>

                        <LinkExternal url="https://matrix.to/#workgroup-crypto:matrix.org">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faComments}
                                    className={"mr-2"}/>
                                Vstoupit
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>
            </div>

            <ContentHeading>
                <FontAwesomeIcon icon={faUsers} className={"mr-2"}/>
                {t("pages.teams.organizationalTeams")}
            </ContentHeading>

            <div className="row">
                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Board
                        </h3>

                        <p>Tým zodpovědný za rozhodování o směřování projektu Pirates 4 Liberty.</p>

                        <b>Jazyk:</b> EN

                        <div className={"mb-2"}>
                            <span className="badge badge-warning">Pro zvané</span>
                        </div>

                        <LinkExternal url="https://matrix.to/#/@miloshavlicek:matrix.org">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faComments}
                                    className={"mr-2"}/>
                                Požádat o členství
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>

                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Veřejná diskuze
                        </h3>

                        <p>Nejširší okruh pro obecnou diskuzi související s komunitou.</p>

                        <b>Jazyk:</b> CZ / EN

                        <div className={"mb-2"}>
                            <span className="badge badge-success">Otevřený přístup</span>
                        </div>

                        <LinkExternal url="https://matrix.to/#pirates4liberty:matrix.org">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faComments}
                                    className={"mr-2"}/>
                                Vstoupit
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>
            </div>

        </Content>
    )
}

export const getStaticProps = StaticProps.default();
