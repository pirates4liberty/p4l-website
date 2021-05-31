import { useTranslation } from "next-i18next";
import React from "react";
import { RecommendationsRepository } from "../../data/Recommendations";
import { IExternalLink } from "../../model/IExternalLink";
import CardButton from "../Content/CardButton";

type Props = {
    topOnly?: boolean
}

const repository = new RecommendationsRepository();

export default function RecommendationsList(props: Props) {
    const {t} = useTranslation();

    let recommendations: IExternalLink[];

    if (props.topOnly) {
        recommendations = repository.getByTag("recommended:top")
    } else {
        recommendations = repository.getAll();
    }

    return (
        <div className={"row"}>
            {
                recommendations.map((recommendation, i) => (
                    <div key={i} className={"col-md-4"}>
                        <CardButton
                            title={recommendation.title}
                            bgColor={"primary"}
                            textColor={"white"}
                            link={recommendation.url}
                            isLinkExternal={true}
                        >
                            {recommendation.description}
                        </CardButton>
                    </div>
                ))
            }
        </div>
    )
}
