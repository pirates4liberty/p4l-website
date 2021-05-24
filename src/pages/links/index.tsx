import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import { PiratePartiesRepository } from "../../data/PirateParties";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

const repository = new PiratePartiesRepository();

export default function Links() {
    const {t} = useTranslation();

    const parties = repository.getAll();

    return (
        <Content>
            <div className="row">
                <div className="col-md-3">
                    <a className="btn btn-lg btn-primary my-3 d-block"
                       href="https://www.facebook.com/pirates4liberty.cz">
                        <FontAwesomeIcon icon={faFacebookF}/>&nbsp;
                        {t("socialLinks.fbPage")}
                    </a>

                    <a className="btn btn-lg btn-primary my-3 d-block"
                       href="https://www.facebook.com/groups/pirates4liberty.cz">
                        <FontAwesomeIcon icon={faComments}/>&nbsp;
                        {t("socialLinks.fbDiscussGroup")}
                    </a>
                </div>

                <div className="col-md-9">
                    <ContentBox title={t("pages.links.partiesByStates")}>
                        <div className={"row"}>
                            {
                                parties.map((party, i) => (
                                        party.website &&
                                        <div className={"col-md-6 p-2"} key={i}>
                                            <Link href={"/parties/" + party.id}>
                                                <a className={"btn btn-lg btn-dark btn-block"}>
                                                    {party.title}
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </ContentBox>
                </div>

            </div>
        </Content>
    )
}

export const getStaticProps = StaticProps.default();
