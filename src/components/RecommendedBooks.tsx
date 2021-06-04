import { useTranslation } from "next-i18next";
import { BooksRepository } from "../data/Books";
import BooksList from "./BooksList";
import ContentHeading from "./Content/ContentHeading";

type Props = {}

export default function RecommendedBooks(props: Props) {

    const {t} = useTranslation();
    const books = (new BooksRepository()).getAll();

    return (
        <>
            <ContentHeading>
                {t("components.recommendedBooks.title")}
            </ContentHeading>

            <BooksList data={books}/>
        </>
    );
}
