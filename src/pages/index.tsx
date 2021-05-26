import { useTranslation } from "next-i18next";
import Image from "next/image";
import Content from "../components/Content/Content";
import ContentBox from "../components/Content/ContentBox";
import HashtagBox from "../components/Hashtag/HashtagBox";
import { HashtagsRepository } from "../data/Hashtags/Hashtags";
import { ValuesRepository } from "../data/Hashtags/Values";
import { StaticProps } from "../tools/Helpers/TranslationHelper";

export default function Home() {
    const {t} = useTranslation();

    const hashtags = (new HashtagsRepository()).getAll();
    const values = (new ValuesRepository()).getAll();

    return (
        <div className="bg-light">
            <div className="cover">
                <div className="container">
                    <a href="https://www.facebook.com/groups/pirates4liberty.cz">
                        <Image
                            src="/pirates4liberty_cover_text1.png"
                            alt="Pirates 4 Liberty - Svoboda a zodpovědnost"
                            layout="responsive"
                            width={1110}
                            height={624}
                        />
                    </a>
                </div>
            </div>

            <div className="notice-line">
                <div className="container">
                    {t("notices.notPolitical")}
                </div>
            </div>

            <Content className="text-center fw-bold" style={{fontSize: "1.5em"}}>
                <ContentBox>
                    <HashtagBox hashtags={hashtags} className="mb-4"/>
                    <HashtagBox hashtags={values}/>
                </ContentBox>
            </Content>
        </div>
    )
}

export const getStaticProps = StaticProps.default();
