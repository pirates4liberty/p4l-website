import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { Menu } from "../model/menu";

export default function Header() {
    const menuItems = Menu.items;

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        {
                            menuItems.map(el => (
                                <li>
                                    <Link href={el.url}>
                                        <a className="nav-link px-2 text-white">
                                            {el.title}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="text-end">
                        <a href="https://www.facebook.com/pirates4liberty.cz" target="_blank" type="button"
                           className="btn btn-primary me-2">
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                        <a href="https://www.facebook.com/groups/pirates4liberty.cz" target="_blank" type="button"
                           className="btn btn-warning">
                            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
