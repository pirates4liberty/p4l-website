import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
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
                    <title>{title + " | Pirates4Liberty"}</title>
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
                        topic.links?.map(link => (
                            <div className={"col-md-6"}>
                                <ContentBox>
                                    <h4>{link?.title}</h4>
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
