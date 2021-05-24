import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Content from "../../components/Content/Content";
import ContentBox from "../../components/Content/ContentBox";
import ExternalLink from "../../components/ExternalLink";
import { PiratePartiesRepository } from "../../data/PirateParties";
import { StaticProps } from "../../tools/Helpers/TranslationHelper";

export default function Parties() {
    const {t} = useTranslation();
    const router = useRouter();
    const {id} = router.query;
    const repository = new PiratePartiesRepository();

    const party = repository.getAll().find(party => party.id === id);

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
                <ContentBox title={party.title}>
                    {
                        party.website &&
                        <ExternalLink data={party.website}
                                      title={"Website"}
                                      className={"btn btn-dark"}
                                      faIcon={faGlobe}/>
                    }

                    <h3 className={"mt-4"}>Facebook groups</h3>
                    {
                        party.fbGroups?.map((fbGroup, i) => {
                            return (
                                <ExternalLink key={i} data={fbGroup}
                                              className={"btn btn-primary m-1"}
                                              faIcon={faFacebookF}/>
                            );
                        })
                    }
                </ContentBox>
            </Content>
        )
    }
}

export const getStaticProps = StaticProps.default();

export const getStaticPaths = async () => {
    const repository = new PiratePartiesRepository();

    const ids = repository.getAll(false, false).map(party => {
        return {
            params: {
                id: party.id
            }
        };
    });

    return {
        paths: ids,
        fallback: "blocking"
    }
}
