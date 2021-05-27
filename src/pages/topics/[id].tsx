import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import { PiratePartiesRepository } from "../../data/PirateParties";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Parties() {
    const {t} = useTranslation();
    const router = useRouter();
    const {id} = router.query;
    const repository = new PiratePartiesRepository();

    const party = repository.getAllRecursively().find(party => party.id === id);

    if (party === undefined) {
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

                <ContentBox>

                </ContentBox>
            </Content>
        )
    }
}

export const getStaticProps = StaticProps.default();

export const getStaticPaths = async () => {
    // const repository = new PiratePartiesRepository();

    // const ids = repository.getAll(false, false);
    const ids: any[] = [];

    return {
        paths: ids,
        fallback: "blocking"
    }
}
