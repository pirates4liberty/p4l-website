import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import CompareIcon from "../../../components/CompareIcon";
import Content from "../../../components/Content/Content";
import ContentBox from "../../../components/Content/ContentBox";
import ContentHeading from "../../../components/Content/ContentHeading";
import LinkExternal from "../../../components/LinkExternal";
import { IdeologiesRepository, IIdeology, OpinionType } from "../../../data/Ideologies";
import { onlyUnique } from "../../../tools/Helpers/Tools";
import { StaticProps } from "../../../tools/Helpers/TranslationHelper";

function getPositivity(opinion?: OpinionType): boolean | undefined {
    if (opinion === undefined) {
        return undefined;
    }

    const positiveList = ["yes"];

    if (positiveList.includes(opinion)) {
        return true;
    }

    const negativeList = ["no"];

    if (negativeList.includes(opinion)) {
        return false;
    }

    return undefined;
}

function isHardContradiction(opinionA?: OpinionType, opinionB?: OpinionType): boolean | undefined {
    let opinionAPositivity = getPositivity(opinionA);
    let opinionBPositivity = getPositivity(opinionB);

    if (opinionAPositivity === undefined || opinionBPositivity === undefined) {
        return undefined;
    }

    return opinionAPositivity !== opinionBPositivity;
}

function isMatch(opinionId: string, ...ideologies: IIdeology[]): boolean | undefined {
    let out: boolean | undefined = undefined;

    let baseOpinion: OpinionType | undefined = undefined;


    for (let i = 0; ideologies[i]; i++) {
        const opinion = ideologies[i].opinions.find(opinion => opinion.id === opinionId);

        if (i === 0) {
            baseOpinion = opinion?.opinion;
        } else {
            if (baseOpinion === opinion?.opinion) {
                out = true;
            } else if (isHardContradiction(baseOpinion, opinion?.opinion)) {
                return false;
            }
        }
    }

    return out;
}

function renderCol(ideology: IIdeology, opinionId: string): JSX.Element {
    const opinion = ideology.opinions.find(opinion => opinion.id === opinionId);
    const isWarning = opinion?.tags?.find(tag => tag === "warning");

    return (
        <td className={"text-center"}>
            <div style={{fontSize: "1.7em"}}>
                <CompareIcon opinion={opinion?.opinion}/>
                {
                    isWarning &&
                    <sup>
                        <FontAwesomeIcon icon={faExclamationTriangle}
                                         className={"text-warning ml-2"}/>
                    </sup>
                }
            </div>
            {
                opinion?.sources?.length &&
                <div>
                    {
                        opinion?.sources.map((source, j) =>
                            <LinkExternal key={j}
                                          url={source.url}
                                          className={"my-1"}>
                                [{j + 1}]
                            </LinkExternal>
                        )
                    }
                </div>
            }
        </td>
    );
}

export default function Topics() {
    const {t} = useTranslation();
    const router = useRouter();
    const {idA, idB} = router.query;

    const repository = new IdeologiesRepository();
    const ideologyA = repository.getAll().find(ideology => ideology.id === idA);
    const ideologyB = repository.getAll().find(ideology => ideology.id === idB);

    const opinionIdsA = ideologyA?.opinions.map(opinion => opinion.id) || [];
    const opinionIdsB = ideologyB?.opinions.map(opinion => opinion.id) || [];
    const opinionIds = opinionIdsA.concat(opinionIdsB).filter(onlyUnique);

    if (!ideologyA || !ideologyB || ideologyA.id === ideologyB.id) {
        return (
            <Content>
                <ContentBox>
                    {t("msg.notFound")}
                </ContentBox>
            </Content>
        )
    } else {
        const title = t(ideologyA.title) + " vs. " + t(ideologyB.title);

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
                    {title}
                </ContentHeading>

                <ContentBox>
                    <table className={"table table-striped table-responsive"}>
                        <thead>
                        <tr>
                            <th style={{width: "20%"}}></th>
                            <th style={{width: "40%", fontSize: "1.4em"}}
                                className={"text-center"}>{t(ideologyA.title)}</th>
                            <th style={{width: "40%", fontSize: "1.4em"}}
                                className={"text-center"}>{t(ideologyB.title)}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            opinionIds.map((opinionId, i) => {
                                    const match = isMatch(opinionId, ideologyA, ideologyB);

                                    return (
                                        <tr key={i}>
                                            <th style={{fontSize: "1.4em"}}
                                                className={
                                                    match ? "text-success" : (match === false ? "text-danger" : "")
                                                }>
                                                {t("ideologyOpinions." + opinionId)}
                                            </th>
                                            {renderCol(ideologyA, opinionId)}
                                            {renderCol(ideologyB, opinionId)}
                                        </tr>
                                    );
                                }
                            )
                        }
                        </tbody>
                    </table>
                </ContentBox>
            </Content>
        )
    }
}

export const getStaticProps = StaticProps.default();

export const getStaticPaths = async () => {
    const repository = new IdeologiesRepository();
    const repositoryAll = repository.getAll(false, false);

    let ids: any[] = [];

    repositoryAll.forEach(ideologyA => {
        repositoryAll
            .filter(ideologyB => ideologyB.id !== ideologyA.id)
            .forEach(ideologyB => {
                ids.push({
                    params: {
                        idA: ideologyA.id,
                        idB: ideologyB.id
                    }
                });
            });
    });

    return {
        paths: ids,
        fallback: "blocking"
    }
}
