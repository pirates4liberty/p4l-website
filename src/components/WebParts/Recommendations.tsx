import { useTranslation } from "next-i18next";
import React from "react";
import { RecommendationsRepository } from "../../data/Recommendations";
import CardButton from "../Content/CardButton";

export default function Recommendations() {
    const {t} = useTranslation();

    const recommendations = (new RecommendationsRepository()).getAll();

    return (
        <div>
            <h3>Doporučujeme</h3>

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
        </div>
    )
}
