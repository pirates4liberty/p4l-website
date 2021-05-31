import { useTranslation } from "next-i18next";
import { IExternalLink } from "../model/IExternalLink";
import { deepCopy, onlyUnique } from "../tools/Helpers/Tools";
import { CachedRepository } from "../tools/Repository/CachedRepository";
import { TopicsRepository } from "./Topics";

export class RecommendationsRepository extends CachedRepository<IExternalLink> {

    protected processItem = (item: IExternalLink) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        if (copy.title) {
            copy.title = t(copy.title);
        }

        return copy;
    }

    getByTag(tag: string): IExternalLink[] {
        return this.getAll()
            .filter(link => link?.tags?.includes(tag));
    }

    protected fetchAll(): IExternalLink[] {
        let out: IExternalLink[] = [];

        (new TopicsRepository())
            .getAll()
            .forEach(
                topic => {
                    out = out.concat(
                        topic.links?.filter(link => link?.tags?.includes("recommended") || link?.tags?.includes("recommended:top")) || []
                    );
                }
            );

        return out.filter(onlyUnique);
    }
}
