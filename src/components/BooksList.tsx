import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";
import { Button, Card } from "react-bootstrap";
import { IBook } from "../data/Books";
import { IExternalLink } from "../model/IExternalLink";
import LinkExternal from "./uni/LinkExternal";

type Props = {
    data?: IBook[]
}

function wrap(el: JSX.Element | string | undefined, buyElement: IExternalLink[] | undefined, key?: number): JSX.Element {
    let out = <>{el}</>;

    if (buyElement?.length) {
        out = <LinkExternal data={buyElement[0]} key={key}>{out}</LinkExternal>
    }

    return out;
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
                        for (let j = 0; j < 2 && book.buy !== undefined && book.buy.length > j; j++) {
                            bookButtons.push(
                                wrap(
                                    <Button
                                        block={true}
                                        className={"mb-1"}>
                                        {
                                            book.buy[j].tags?.includes("free") &&
                                            <>
                                                <FontAwesomeIcon
                                                    icon={faBookOpen}
                                                    className={"mr-2"}/>
                                                {t("btn.read")}
                                            </>
                                        }
                                        {
                                            !book.buy[j].tags?.includes("free") &&
                                            <>
                                                <FontAwesomeIcon
                                                    icon={faShoppingCart}
                                                    className={"mr-2"}/>
                                                {t("btn.buy")}
                                            </>
                                        }
                                        <br/>
                                        <small>
                                            ({book.buy[j].title})
                                        </small>
                                    </Button>,
                                    book.buy,
                                    j
                                )
                            )
                        }

                        return (
                            <div className={"col-md-3"} key={i}>
                                <Card className={"m-1"}>
                                    {
                                        bookImg &&
                                        wrap(
                                            <Card.Img
                                                variant="top"
                                                src={"/img/book/" + bookImg}
                                                style={{"height": "360px"}}
                                            />,
                                            book.buy)
                                    }
                                    <Card.Body>
                                        <Card.Title>
                                            {wrap(book.titleTranslated, book.buy)}
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
