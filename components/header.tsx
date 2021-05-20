import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Úvod</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Rozcestník</a></li>
                    </ul>

                    <div className="text-end">
                        <button type="button" className="btn btn-primary me-2">
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                        </button>
                        <button type="button" className="btn btn-warning">
                            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
