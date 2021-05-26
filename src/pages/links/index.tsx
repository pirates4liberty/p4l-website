import { useTranslation } from "next-i18next";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ContentHeading from "../../components/Content/ContentHeading";
import { PiratePartiesRepository } from "../../data/PirateParties";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

const repository = new PiratePartiesRepository();

export default function Links() {
    const {t} = useTranslation();

    const parties = repository.getAll();

    return (
        <Content>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={"/"}>
                            <a>{t("pages.home.title")}</a>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {t("pages.links.title")}
                    </li>
                </ol>
            </nav>

            <ContentHeading>
                {t("pages.links.partiesByStates")}
            </ContentHeading>
            <ContentBox>
                {
                    parties.map((party, i) => (
                            <div key={i}>
                                <div className={"row text-center"}>
                                    <div className={"col-md-4"}></div>
                                    <div className={"col-md-4 p-2"}>
                                        <Link href={"/parties/" + party.id}>
                                            <a className={"btn btn-lg btn-secondary btn-block"}>
                                                {party.title} ({party.abbrev})
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className={"row"}>
                                    {
                                        party.children && party.children.map((subParty, j) => (
                                            <div className={"col-md-4 p-2"} key={j}>
                                                <Link href={"/parties/" + subParty.id}>
                                                    <a className={"btn btn-lg btn-dark btn-block"}>
                                                        {t("states." + subParty.id)}
                                                    </a>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    )
                }
            </ContentBox>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
