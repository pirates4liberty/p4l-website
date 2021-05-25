import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ExternalLink from "../../components/ExternalLink";
import { IPirateParty, PiratePartiesRepository } from "../../data/PirateParties";
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
                    Not Found
                </ContentBox>
            </Content>
        )
    } else {
        return (
            <Content>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href={"/"}>
                                <a>{t("pages.home.title")}</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href={"/links"}>
                                <a>{t("pages.links.title")}</a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {party.title}
                        </li>
                    </ol>
                </nav>

                <ContentBox title={party.title}>
                    {
                        party.website &&
                        <ExternalLink data={party.website}
                                      title={"Website"}
                                      className={"btn btn-dark"}
                                      faIcon={faGlobe}/>
                    }

                    <h3 className={"mt-4"}>
                        <FontAwesomeIcon icon={faUsers} className={"mr-2"}/>
                        {t("pages.parties.subParties")}
                    </h3>
                    {
                        party.children?.map((child, i) => {
                            return (
                                <Link key={i} href={"/parties/" + child.id}>
                                    <a className={"btn btn-dark m-1"}>
                                        <FontAwesomeIcon icon={faUsers} className={"mr-2"}/>
                                        {child.title}
                                    </a>
                                </Link>
                            );
                        })
                    }

                    <h3 className={"mt-4"}>
                        <FontAwesomeIcon icon={faUsers} className={"mr-2"}/>
                        {t("pages.parties.fbGroups")}
                    </h3>
                    {
                        party.fbGroups?.map((fbGroup, i) => {
                            return (
                                <ExternalLink key={i} data={fbGroup}
                                              className={"btn btn-primary m-1"}
                                              faIcon={faFacebookF}/>
                            );
                        })
                    }

                    <h3 className={"mt-4"}>
                        <FontAwesomeIcon icon={faNewspaper} className={"mr-2"}/>
                        {t("pages.parties.fbPages")}
                    </h3>
                    {
                        party.fbPages?.map((fbGroup, i) => {
                            return (
                                <ExternalLink key={i} data={fbGroup}
                                              className={"btn btn-secondary m-1"}
                                              faIcon={faFacebookF}/>
                            );
                        })
                    }

                    <h3 className={"mt-4"}>
                        <FontAwesomeIcon icon={faGlobe} className={"mr-2"}/>
                        {t("pages.parties.webSystems")}
                    </h3>
                    {
                        party.webSystems?.map((fbGroup, i) => {
                            return (
                                <ExternalLink key={i} data={fbGroup}
                                              className={"btn btn-danger m-1"}/>
                            );
                        })
                    }
                </ContentBox>
            </Content>
        )
    }
}

export const getStaticProps = StaticProps.default();

function getPartiesIdsRecursively(parties: IPirateParty[]): any[] {
    let out: any[] = [];

    parties.forEach(party => {
        out.push(
            {
                params: {
                    id: party.id
                }
            }
        );

        if (party.children) {
            out = out.concat(out, getPartiesIdsRecursively(party.children));
        }
    });

    return out;
};

export const getStaticPaths = async () => {
    const repository = new PiratePartiesRepository();

    const ids = getPartiesIdsRecursively(repository.getAll(false, false));

    return {
        paths: ids,
        fallback: "blocking"
    }
}
