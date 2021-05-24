import { useTranslation } from "next-i18next";
import { IHashtag } from "../../model/IHashtag";
import { deepCopy } from "../../tools/Helpers/Tools";
import { CachedRepository } from "../../tools/Repository/CachedRepository";

const data: IHashtag[][] = [
    [
        {hashtag: "hashtags.liberty"},
        {hashtag: "hashtags.liberalisation"},
        {hashtag: "hashtags.deregulation"}
    ],
    [
        {hashtag: "hashtags.pirates", link: "/links"},
        {hashtag: "hashtags.responsibility"},
        {hashtag: "hashtags.discussion"},
        {hashtag: "hashtags.hatefree"}
    ],
    [
        {hashtag: "hashtags.opensource"},
        {hashtag: "hashtags.crowdfunding"},
        {hashtag: "hashtags.voluntariness"},
        {hashtag: "hashtags.evidenceBasedPolicy"}
    ],
];

export class HashtagsRepository extends CachedRepository<IHashtag[]> {

    protected processItem = (item: IHashtag[]) => {
        const {t} = useTranslation();

        const copy = deepCopy(item);

        copy.forEach(hashtag => {
            if (hashtag.hashtag) {
                hashtag.hashtag = t(hashtag.hashtag);
            }
        })

        return copy;
    }

    protected fetchAll() {
        return data;
    }

}