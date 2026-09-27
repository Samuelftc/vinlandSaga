import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { BookOpen, Scale, Swords } from "lucide-react";

export default function PaginaFilosofias() {
    return (
        <>
            <Header />
            <main>
                <section className="topo-header">
                    <nav aria-label="Breadcrumb">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/batalhas">Batalhas</Link></li>
                            <li className="breadcrumb-ativo" aria-current="page">Batalhas & Duelos</li>
                        </ul>
                    </nav>

                    <div className="topo-conteudo">
                        <h1>Batalhas e a Arte da guerra</h1>
                        <div className="info-top-Arcos">
                            <p>O catálogo tático oficial dos maiores confrontos militares e duelos canônicos de Vinland
                                Saga. Da selvageria marítima do Prólogo ao choque disciplinar na Fazenda de Ketil, da
                                guerra civil em Jomsborg ao clímax colonial nas florestas de Vinland.</p>
                        </div>
                        <ul className="cards-top-lista">
                            <li className="card-top-Batalhas">
                                <article>
                                    <div>
                                        <p>Arcos Canônicos</p>
                                        <BookOpen size={20} color="#FFB3B1" />
                                    </div>
                                    <h5 className="">4 Grandes Arcos</h5>
                                    <p className="card-texto-Batalhas">Prólogo, Escravidão, Expedição ao leste e
                                        Vinland.</p>
                                </article>
                            </li>
                            <li className="card-top-Batalhas">
                                <article>
                                    <div>
                                        <p>Confrontos catalogados</p>
                                        <Swords size={20} color="#FFB3B1" />
                                    </div>
                                    <h5 className="">11 Confrontos</h5>
                                    <p className="card-texto-Batalhas">Cercos monumentais, escaramuças táticas e duelos
                                        singulares.</p>
                                </article>
                            </li>
                            <li className="card-top-Batalhas">
                                <article>
                                    <div>
                                        <p>Doutrina em evolução</p>
                                        <Scale size={20} color="#FFB3B1" />
                                    </div>
                                    <h5 className="">Pacifismo</h5>
                                    <p className="card-texto-Batalhas">A trajetória da fúria cega de Thorfinn até o combate
                                        defensivo estrito sem armas.</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}