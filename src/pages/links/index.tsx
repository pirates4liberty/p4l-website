import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../model/interfaces/link";

export default function Links() {
    const links: ExternalLink[] = [
        {
            title: "Česká republika",
            url: "https://www.pirati.cz/"
        },
        {
            title: "Slovensko",
            url: "https://www.slovenskipirati.sk/"
        },
        {
            title: "Rakousko",
            url: "https://piratenpartei.at/"
        },
        {
            title: "Polsko",
            url: "https://polskapartiapiratow.pl/"
        },
    ];

    return (
        <div className="bg-light">

            <div className="container content">
                <div className="row">
                    <div className="col-md-3">
                        <a className="btn btn-lg btn-primary my-3 d-block"
                           href="https://www.facebook.com/pirates4liberty.cz">
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>&nbsp;
                            Facebook stránka
                        </a>

                        <a className="btn btn-lg btn-primary my-3 d-block"
                           href="https://www.facebook.com/groups/pirates4liberty.cz">
                            <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>&nbsp;
                            Diskuzní skupina na Facebooku
                        </a>
                    </div>

                    <div className="col-md-9">
                        <div className="my-3 p-3 bg-white rounded shadow-sm">

                            <h2>Pirátské strany dle států</h2>
                            {
                                links.map(el => (
                                        <ul>
                                            <li>
                                                <a href={el.url} target="_blank">{el.title}</a>
                                            </li>
                                        </ul>
                                    )
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
