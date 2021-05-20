import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="bd-footer p-3 p-md-5 mt-5 bg-white shadow-sm text-center text-sm-start">
            <div className="container">
                <ul className="bd-footer-links ps-0 mb-3">
                    <li className="d-inline-block">
                        <a href="https://github.com/cothema/pirates4liberty" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />&nbsp;
                            GitHub
                        </a>
                    </li>
                </ul>

                <p className="mb-0">
                    Code license:&nbsp;
                    <a href=" https://github.com/cothema/pirates4liberty-web/main/LICENSE"
                       rel="license noopener noreferrer"
                       target="_blank">MIT</a>,
                    text content:&nbsp;
                    <a href="https://creativecommons.org/licenses/by/3.0/"
                       rel="license noopener noreferrer"
                       target="_blank">CC BY 3.0</a> (if not specified)
                </p>
            </div>
        </footer>
    )
}
