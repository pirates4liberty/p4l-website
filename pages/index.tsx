import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
    return (
        <div className="bg-light">
            <Header/>

            <div className="cover">
                <div className="container">
                    <a href="https://www.facebook.com/groups/pirates4liberty.cz">
                        <img src="pirates4liberty_cover_text1.png"/>
                    </a>
                </div>
            </div>

            <div className="notice-line">
                <div className="container">
                    Tato iniciativa není řízena Pirátskou stranou, ani jinou politickou stranou.
                </div>
            </div>

            <div className="container content">
                <div className="row">
                    <div className="col-md-3 pt-4">
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
                        <div className="card text-dark bg-warning my-5">
                            <div className="card-body">
                                <p className="card-text">
                                    Utváříme hatefree prostor pro diskuzi a hledání porozumění mezi Piráty a
                                    anarchokapitalisty,
                                    libertariány či minarchisty.
                                </p>
                                <p className="card-text">
                                    Naším cílem je hledat volnotržní řešení pro výzvy spjaté s naplňováním programu
                                    Pirátských
                                    stran v ČR i ve světě. Nabízíme konkrétní libertariánské alternativy k běžným
                                    regulacím
                                    a
                                    prosazujeme možnost volby tam, kde regulace z jakéhokoliv důvodu být musí. Díky
                                    tomu, že
                                    nejsme svázáni s politickou stranou, můžeme se zasazovat o propagaci (i komerčních)
                                    řešení,
                                    která podporují svobodný volný trh a rozvoj našich hodnot. Ve své podstatě tak
                                    předcházíme
                                    případným státním intervencím.
                                </p>
                                <p className="card-text">
                                    Vítáme střet různých názorů a pohledů formou racionální a slušné diskuze. Snažme se
                                    respektovat navzájem a odstínit se od emocí tak, aby byla racionální diskuze možná.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}
