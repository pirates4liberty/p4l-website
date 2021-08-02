import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Content from "../../components/uni/Content/Content";
import ContentBox from "../../components/uni/Content/ContentBox";
import ContentHeading from "../../components/uni/Content/ContentHeading";
import { TopicsRepository } from "../../data/Topics";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Topics() {
    const {t} = useTranslation();
    const router = useRouter();
    const {id} = router.query;

    const repository = new TopicsRepository();
    const topic = repository.getAll().find(topic => topic.id === id);

    if (topic === undefined) {
        return (
            <Content>
                <ContentBox>
                    {t("msg.notFound")}
                </ContentBox>
            </Content>
        )
    } else {
        const title = t(topic.title);

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
                        <li className="breadcrumb-item">
                            <Link href={"/links"}>
                                <a>{t("pages.topics.title")}</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </nav>

                <ContentHeading>
                    {title}
                </ContentHeading>

                <h3>{t("pages.topics.links")}</h3>
                <div className={"row"}>
                    {
                        topic.links?.map((link, i) => (
                            <div className={"col-md-6"} key={i}>
                                <ContentBox>
                                    <h4>
                                        {link?.title}
                                        {
                                            link?.tags?.find(tag => tag === "recommended:top") &&
                                            <FontAwesomeIcon icon={faStar} className={"ml-2 text-warning"}/>
                                        }
                                        {
                                            link?.tags?.find(tag => tag === "recommended") &&
                                            <FontAwesomeIcon icon={faStar} className={"ml-2 text-secondary"}/>
                                        }
                                    </h4>
                                    <p>{link?.description}</p>
                                    <div>
                                        <Link href={link.url}>
                                            <a className={"btn btn-primary"} target={"_blank"} rel="noreferrer">
                                                {t("btn.goToWebsite")} &nbsp;<FontAwesomeIcon icon={faArrowRight}/>
                                            </a>
                                        </Link>
                                    </div>
                                </ContentBox>
                            </div>
                        ))
                    }
                </div>
            </Content>
        )
    }
}

export const getStaticProps = StaticProps.default();

export const getStaticPaths = async () => {
    const repository = new TopicsRepository();

    const ids = repository.getAll(false, false).map(topic => {
        return {
            params: {
                id: topic.id
            }
        }
    });

    return {
        paths: ids,
        fallback: "blocking"
    }
}
