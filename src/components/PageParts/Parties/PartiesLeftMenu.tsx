import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons/faWikipediaW";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faSitemap } from "@fortawesome/free-solid-svg-icons/faSitemap";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import { IPirateParty } from "../../../data/PirateParties";
import ContentBox from "../../Content/ContentBox";
import ExternalLink from "../../ExternalLink";

type Props = {
    data?: IPirateParty,
    className?: string
}

export default function PartiesLeftMenu(props: Props) {
    const {t} = useTranslation();

    const party = props.data || {} as IPirateParty;

    const wikiLink = party.links?.find(link => link.tags?.includes("wikipedia") && link.lang === i18n?.language);

    return (
        <ContentBox className={props.className}>
            {
                party.website &&
                <ExternalLink data={party.website}
                              title={"Website"}
                              className={"btn btn-secondary btn-block"}
                              faIcon={faGlobe}/>
            }
            {
                wikiLink &&
                <ExternalLink data={wikiLink}
                              title={"Wikipedia"}
                              className={"btn btn-secondary btn-sm btn-block"}
                              faIcon={faWikipediaW}/>
            }

            {
                party.fbPages?.filter(fbPage => {
                    return fbPage.tags?.includes("official");
                }).map((fbPage, i) => {
                    return (
                        <ExternalLink key={i} data={fbPage}
                                      className={"btn btn-primary btn-block"}
                                      faIcon={faFacebookF}/>
                    );
                })
            }

            {
                party.fbGroups?.filter(fbGroup => {
                    return fbGroup.tags?.includes("official");
                }).map((fbGroup, i) => {
                    return (
                        <ExternalLink key={i} data={fbGroup}
                                      className={"btn btn-primary btn-block"}
                                      faIcon={faUsers}/>
                    );
                })
            }

            {
                party.parent &&
                <>
                    <h3 className={"mt-4"}>
                        <small>
                            {t("pages.parties.superParty")}
                        </small>
                    </h3>

                    <Link href={"/parties/" + party.parent.id}>
                        <a className={"btn btn-secondary btn-sm btn-block text-left"}>
                            {t(party.parent.title)}
                        </a>
                    </Link>
                </>
            }

            {
                party.children?.length &&
                <h3 className={"mt-4"}>
                    <small>
                        <FontAwesomeIcon icon={faSitemap} className={"mr-2"}/>
                        {t("pages.parties.subParties")}
                    </small>
                </h3>
            }
            {
                party.children?.map((child, i) => {
                    return (
                        <Link key={i} href={"/parties/" + child.id}>
                            <a className={"btn btn-dark btn-block text-left"}>
                                {t(child.title)}
                            </a>
                        </Link>
                    );
                })
            }
        </ContentBox>
    );
}
