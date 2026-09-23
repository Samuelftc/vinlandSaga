import { Link } from "react-router-dom";
import Header from "../components/layout/Header";

import '../styles/pages/paginaArcos.css'

export default function PaginaArcos() {
    return (
        <>
            <Header />
            <main>
                <div className="topoMainArcos">
                    <nav aria-label="Breadcrumb">
                        <ul className="filaNav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/arcos">Arcos</Link></li>
                            <li className="ramoAtual" aria-current="page">Crônicas & sagas históricas</li>
                        </ul>
                    </nav>

                    <div className="topoMainTextosArcos">
                        <h1>Arcos narrativos da saga</h1>
                        <div className="informacoesInferioresTopoArcos">
                            <p>A trajetória completa de Thorfinn Karlsefni através de quatro eras marcantes: da vingança sangrenta nos campos de batalha da Inglaterra à busca utópica pela terra sem senhores nem escravos.</p>
                        </div>
                        <ul className="ulCardsTopoArcos">
                            <li className="liCardTopoArcos">
                                <article>
                                    <h5 className="">4</h5>
                                    <p className="subtituloCardTopoArco">Grandes Arcos</p>
                                    <p className="textoCardTopoArco">Evolução épica</p>
                                </article>
                            </li>
                            <li className="liCardTopoArcos">
                                <article>
                                    <h5 className="">54</h5>
                                    <p className="subtituloCardTopoArco">Episódios animados</p>
                                    <p className="textoCardTopoArco">Temporadas 1 & 2 completas</p>
                                </article>
                            </li>
                            <li className="liCardTopoArcos">
                                <article>
                                    <h5 className="">216+</h5>
                                    <p className="subtituloCardTopoArco">Capítulos de mangá</p>
                                    <p className="textoCardTopoArco">Obra de Makoto Yukimura</p>
                                </article>
                            </li>
                            <li className="liCardTopoArcos">
                                <article>
                                    <h5 className="tituloDiferenteCardTopoArco">1000+</h5>
                                    <p className="subtituloCardTopoArco">Anos de história nórdica</p>
                                    <p className="textoCardTopoArco">Baseado na Saga dos Groenlandeses</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}