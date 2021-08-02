import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { Button, Card } from "react-bootstrap";
import { IBook } from "../data/Books";
import LinkExternal from "./uni/LinkExternal";

type Props = {
    data?: IBook[]
}

export default function BooksList(props: Props) {

    const {t} = useTranslation();

    return (
        <div className={"row"}>
            {
                props.data && props.data.map((book, i) => {
                        let bookImg;

                        if (book.imgs && book.imgs[0]) {
                            bookImg = book.imgs[0].url;
                        }

                        const bookButtons = [];
                        for (i = 0; i < 2 && book.buy !== undefined && book.buy.length > i; i++) {
                            bookButtons.push(
                                <LinkExternal data={book.buy[i]}>
                                    <Button
                                        block={true}
                                        className={"mb-1"}>
                                        {
                                            book.buy[i].tags?.includes("free") &&
                                            <>
                                                <FontAwesomeIcon
                                                    icon={faBookOpen}
                                                    className={"mr-2"}/>
                                                {t("btn.read")}
                                            </>
                                        }
                                        {
                                            !book.buy[i].tags?.includes("free") &&
                                            <>
                                                <FontAwesomeIcon
                                                    icon={faShoppingCart}
                                                    className={"mr-2"}/>
                                                {t("btn.buy")}
                                            </>
                                        }
                                        <br/>
                                        <small>
                                            ({book.buy[i].title})
                                        </small>
                                    </Button>
                                </LinkExternal>
                            )
                        }

                        return (
                            <div className={"col-md-3"} key={i}>
                                <Card className={"m-1"}>
                                    {
                                        bookImg &&
                                        <Card.Img variant="top" src={"/img/book/" + bookImg} style={{"height": "360px"}}/>
                                    }
                                    <Card.Body>
                                        <Card.Title>
                                            {book.titleTranslated}
                                        </Card.Title>
                                        <Card.Text>
                                            {book.descriptionTranslated}
                                            {
                                                book.authors &&
                                                <div className={"mb-3"}>
                                                    {t("components.recommendedBooks.author")}: {
                                                    book.authors.map((author, j) => {
                                                            let out = <>{author.name}</>;

                                                            if (author.link) {
                                                                out = (
                                                                    <LinkExternal data={author.link}>
                                                                        {out}
                                                                    </LinkExternal>
                                                                );
                                                            }

                                                            return (
                                                                <span key={j}>{out}</span>
                                                            );
                                                        }
                                                    )
                                                }
                                                </div>
                                            }
                                            {bookButtons}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
}
