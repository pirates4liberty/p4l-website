import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import PartiesList from "../../components/PageParts/Parties/PartiesList";
import PartiesSubList from "../../components/PageParts/Parties/PartiesSubList";
import { PiratePartiesRepository } from "../../data/PirateParties";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

const repository = new PiratePartiesRepository();

export default function Links() {
    const {t} = useTranslation();

    const parties = repository.getAll();

    const title = t("pages.links.title");

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
                {t("pages.links.partiesByStates")}
            </ContentHeading>
            <ContentBox>
                <PartiesList data={parties.filter(party => party.children?.length)}></PartiesList>

                <hr/>

                <PartiesSubList data={parties.filter(party => !party.children?.length)}></PartiesSubList>
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
