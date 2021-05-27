import { i18n, useTranslation } from "next-i18next";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
import Content from "../components/Content/Content";
import ContentBox from "../components/Content/ContentBox";
import HashtagBox from "../components/Hashtag/HashtagBox";
import { HashtagsRepository } from "../data/Hashtags/Hashtags";
import { ValuesRepository } from "../data/Hashtags/Values";
import { StaticProps } from "../tools/Helpers/TranslationHelper";

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

    return (
        <>
            <Head>
                <title>{t("Pirates4Liberty")}</title>
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

                <Content className="text-center fw-bold" style={{fontSize: "1.5em"}}>
                    <ContentBox>
                        <HashtagBox hashtags={hashtags} className="mb-4"/>
                        <HashtagBox hashtags={values}/>
                    </ContentBox>
                </Content>
            </div>
        </>
    )
}

export const getStaticProps = StaticProps.default();
