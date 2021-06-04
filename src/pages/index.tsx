import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { i18n, useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import CardButton from "../components/Content/CardButton";
import Content from "../components/Content/Content";
import ContentBox from "../components/Content/ContentBox";
import ContentHeading from "../components/Content/ContentHeading";
import HashtagBox from "../components/Hashtag/HashtagBox";
import LinkInternal from "../components/LinkInternal";
import RecommendationsList from "../components/WebParts/RecommendationsList";
import { HashtagsRepository } from "../data/Hashtags/Hashtags";
import { ValuesRepository } from "../data/Hashtags/Values";
import { StaticProps } from "../tools/Helpers/TranslationHelper";
import { CssColor } from "../types/CssColor";

export default function Home() {
    const {t} = useTranslation();

    const hashtags = (new HashtagsRepository()).getAll();
    const values = (new ValuesRepository()).getAll();

    const carouselData: {
        imgSrc: string,
        alt?: string,
        title?: string,
        text?: string
    }[] = [];

    if (i18n?.language === "cz") {
        carouselData.push({
            imgSrc: "/img/carousel/p4l_cover_cz.png",
            alt: "Pirates 4 Liberty - Svoboda a zodpovědnost",
        });
    } else {
        carouselData.push({
            imgSrc: "/img/carousel/p4l_cover_en.png",
            alt: "Pirates 4 Liberty - Liberty & Responsibility"
        });
    }

    const ctaButtons:
        {
            title: string,
            description?: string;
            link: string;
            isLinkExternal?: boolean
            bgColor: CssColor;
            textColor?: string,
        }[] = [
        {
            title: t("pages.home.cta.areYouLibertarian.title"),
            link: "https://8values.github.io/",
            description: t("pages.home.cta.areYouLibertarian.description"),
            bgColor: "warning",
            isLinkExternal: true
        },
        {
            title: t("pages.home.cta.inCommon.title") + " ❤️",
            link: "/compare/pirates/libertarians",
            bgColor: "success",
            textColor: "white",
            isLinkExternal: false
        },
        {
            title: t("pages.home.cta.whoArePirates.title") + " 🏴‍☠️",
            link: "https://en.wikipedia.org/wiki/Pirate_Party",
            description: t("pages.home.cta.whoArePirates.description"),
            bgColor: "dark",
            textColor: "white",
            isLinkExternal: true
        }
    ];

    return (
        <>
            <Head>
                <title>{t("app.title")}</title>
            </Head>
            <div className="cover">
                <div className="container">
                    <Carousel controls={carouselData.length > 1} indicators={carouselData.length > 1}>
                        {
                            carouselData.map((carouselItem, i) => (
                                <Carousel.Item key={i}>
                                    <Image
                                        src={carouselItem.imgSrc}
                                        alt={carouselItem.alt}
                                        className="d-block w-100"
                                        layout="responsive"
                                        width={1110}
                                        height={624}
                                    />
                                    <Carousel.Caption>
                                        {
                                            carouselItem.title &&
                                            <h3>{carouselItem.title}</h3>
                                        }
                                        {
                                            carouselItem.text &&
                                            <p>{carouselItem.text}</p>
                                        }
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
            </div>

            <div className="bg-light">
                <div className="notice-line">
                    <div className="container">
                        {t("notices.notPolitical")}
                    </div>
                </div>

                <Content>
                    <div className={"row"}>
                        {
                            ctaButtons.map((ctaButton, i) =>
                                <div key={i} className={"col-md-4"}>
                                    <CardButton
                                        title={ctaButton.title}
                                        bgColor={ctaButton.bgColor}
                                        textColor={ctaButton.textColor}
                                        link={ctaButton.link}
                                        isLinkExternal={ctaButton.isLinkExternal}
                                    >
                                        {ctaButton.description}
                                    </CardButton>
                                </div>
                            )
                        }
                    </div>

                    <div className={"row"}>
                        <div className={"col-md-8"}>
                            <ContentBox style={{fontSize: "1.5em"}} className={"text-center fw-bold mb-5"}>
                                <HashtagBox hashtags={hashtags} className="mb-4"/>
                                <HashtagBox hashtags={values}/>
                            </ContentBox>
                        </div>
                        <div className={"col-md-4"}>
                            <ContentBox>
                                <ContentHeading>
                                    <FontAwesomeIcon icon={faCalendar} className={"mr-2"}/>
                                    {t("pages.home.calendar")}
                                </ContentHeading>
                                <iframe
                                    src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=300&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=1i5s4rpq519gs9cpf1i4j96m3s%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=Europe%2FPrague"
                                    style={{"border": 0}} width="320" height="300" frameBorder="0" scrolling="no"/>
                            </ContentBox>
                        </div>
                    </div>

                    <div>
                        <h3>
                            {t("parts.recommendations.title")}
                        </h3>

                        <RecommendationsList topOnly={true}/>

                        <div className={"text-center"}>
                            <LinkInternal url={"/recommendations"}>
                                <a className={"btn btn-outline-dark btn-lg"}>
                                    {t("parts.recommendations.more")}
                                    <FontAwesomeIcon icon={faArrowRight} className={"ml-2"}/>
                                </a>
                            </LinkInternal>
                        </div>
                    </div>
                </Content>
            </div>
        </>
    )
}

export const getStaticProps = StaticProps.default();
