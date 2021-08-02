import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons/faProjectDiagram";
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

export default function Projects() {
    const {t} = useTranslation();

    const title = t("pages.projects.title");

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
                <FontAwesomeIcon icon={faProjectDiagram} className={"mr-2"}/>
                {t("pages.projects.title")}
            </ContentHeading>

            <div className="row">
                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Generátor parodické kampaně
                        </h3>

                        <LinkExternal url="https://generator.pirates4liberty.cz/">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faGlobe}
                                    className={"mr-2"}/>
                                Web
                            </Button>
                        </LinkExternal>
                        <LinkExternal url="https://github.com/miloshavlicek/pirati-generator">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className={"mr-2"}/>
                                Github
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>

                <div className="col-md-4">
                    <ContentBox>
                        <h3>
                            Pirátský rozcestník
                        </h3>

                        <LinkExternal url="https://rozcestnik.pirates4liberty.cz/">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faGlobe}
                                    className={"mr-2"}/>
                                Web
                            </Button>
                        </LinkExternal>
                        <LinkExternal url="https://github.com/miloshavlicek/pirates-guide">
                            <Button
                                block={true}
                                className={"mb-1"}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className={"mr-2"}/>
                                Github
                            </Button>
                        </LinkExternal>
                    </ContentBox>
                </div>
            </div>

        </Content>
    )
}

export const getStaticProps = StaticProps.default();
