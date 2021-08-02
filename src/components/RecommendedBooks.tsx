import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { BooksRepository } from "../data/Books";
import BooksList from "./BooksList";
import ContentHeading from "./uni/Content/ContentHeading";

type Props = {}

export default function RecommendedBooks(props: Props) {

    const {t} = useTranslation();
    const books = (new BooksRepository()).getAll();

    return (
        <>
            <ContentHeading className={"mt-4"}>
                <FontAwesomeIcon
                    icon={faBook}
                    className={"mr-3"}/>
                {t("components.recommendedBooks.title")}
            </ContentHeading>

            <BooksList data={books}/>
        </>
    );
}
