import { Link } from "react-router-dom";
import Header from "../components/layout/Header";

import '../styles/pages/paginaArcos.css'
import { BookOpen, MapPin, Tv } from "lucide-react";

import { arcos } from "../data/Arcos";
import Footer from "../components/layout/Footer";


export default function PaginaArcos() {
    return (
        <>
            <Header />
            <main>
                <section className="topo-header">
                    <nav aria-label="Breadcrumb">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/arcos">Arcos</Link></li>
                            <li className="breadcrumb-ativo" aria-current="page">Crônicas & sagas históricas</li>
                        </ul>
                    </nav>

                    <div className="topo-conteudo">
                        <h1>Arcos narrativos da saga</h1>
                        <div className="info-top-Arcos">
                            <p>A trajetória completa de Thorfinn Karlsefni através de quatro eras marcantes: da vingança sangrenta nos campos de batalha da Inglaterra à busca utópica pela terra sem senhores nem escravos.</p>
                        </div>
                        <ul className="cards-top-lista">
                            <li className="card-top">
                                <article>
                                    <h5 className="">4</h5>
                                    <p className="card-subtitulo">Grandes Arcos</p>
                                    <p className="card-texto">Evolução épica</p>
                                </article>
                            </li>
                            <li className="card-top">
                                <article>
                                    <h5 className="">54</h5>
                                    <p className="card-subtitulo">Episódios animados</p>
                                    <p className="card-texto">Temporadas 1 & 2 completas</p>
                                </article>
                            </li>
                            <li className="card-top">
                                <article>
                                    <h5 className="">216+</h5>
                                    <p className="card-subtitulo">Capítulos de mangá</p>
                                    <p className="card-texto">Obra de Makoto Yukimura</p>
                                </article>
                            </li>
                            <li className="card-top">
                                <article>
                                    <h5 className="card-titulo-especial">1000+</h5>
                                    <p className="card-subtitulo">Anos de história nórdica</p>
                                    <p className="card-texto">Baseado na Saga dos Groenlandeses</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="secao-cronologia">
                    <h2 className="titulo-cronologia">Progressão cronológica da saga</h2>

                    <div className="cards-progressao">
                        <div className="card-progressao">
                            <div className="cabecalho-card">
                                <p className="badge-arco">Arco 1</p>
                                <p className="midia-card"><Tv size={20} /> WIT Studio</p>
                            </div>
                            <div className="corpo-card">
                                <h5 className="titulo-card">Prólogo</h5>
                                <p className="subtitulo-card">Guerra e Vingança</p>
                                <div className="barra-progresso"></div>
                                <p className="info-midia">24 Episódios - Mangá 1-54</p>
                            </div>
                        </div>

                        <div className="card-progressao">
                            <div className="cabecalho-card">
                                <p className="badge-arco">Arco 2</p>
                                <p className="midia-card"><Tv size={20} /> MAPPA</p>
                            </div>
                            <div className="corpo-card">
                                <h5 className="titulo-card">Escravidão</h5>
                                <p className="subtitulo-card">Redenção e Renascimento</p>
                                <div className="barra-progresso"></div>
                                <p className="info-midia">24 Episódios - Mangá 55-99</p>
                            </div>
                        </div>

                        <div className="card-progressao">
                            <div className="cabecalho-card">
                                <p className="badge-arco">Arco 3</p>
                                <p className="midia-card"><BookOpen size={20} /> Mangá</p>
                            </div>
                            <div className="corpo-card">
                                <h5 className="titulo-card">Expedição Leste</h5>
                                <p className="subtitulo-card">Comércio e Miklagard</p>
                                <div className="barra-progresso"></div>
                                <p className="info-midia">10 Capítulos - Caps 100-110</p>
                            </div>
                        </div>

                        <div className="card-progressao">
                            <div className="cabecalho-card">
                                <p className="badge-arco">Arco 4</p>
                                <p className="midia-card"><BookOpen size={20} /> Mangá</p>
                            </div>
                            <div className="corpo-card">
                                <h5 className="titulo-card">Saga de vinland</h5>
                                <p className="subtitulo-card">Colonização e utopia</p>
                                <div className="barra-progresso"></div>
                                <p className="info-midia">90 Capítulos - Caps 111-220</p>
                            </div>
                        </div>


                    </div>
                </section>

                <section className="secao-detalhes-Arcos">
                    <div className="divSecaoTitulo">
                        <h3>Detalhes dos Arcos</h3>
                    </div>

                    <div className="arcos">
                        {arcos.map((arco) => (
                            <div className="card-Arco" key={arco.id}>
                                <div className="esquerda-Card">
                                    <div className="topo-Arco">
                                        <p className="badge-arco">{arco.arco}</p>
                                        <p className="temp-Caps-Arco">{arco.temporada}</p>
                                        <p className="temp-Caps-Arco">{arco.capitulos}</p>
                                        <p className="midia-Arco">Estúdio: {arco.midia}</p>
                                    </div>

                                    <div className="div-Titulo-Arco">
                                        <h4 className="titulo-Arco">{arco.titulo}</h4>
                                        <p className="lugares-Arco"><MapPin size={18} /> {arco.lugares}</p>
                                    </div>

                                    <div className="corpo-Arco">
                                        <p className="desCompleta-Arco">{arco.desCompleta}</p>
                                        <div className="infos-Adicionais-Arco">
                                            <div>
                                                <p className="subtitulo-Infos">Protagonistas e figuras centrais</p>
                                                <p className="texto-Infos">{arco.protagonistas}</p>
                                            </div>
                                            <div>
                                                <p className="subtitulo-Infos">Temas filosóficos</p>
                                                <p className="texto-Infos">{arco.filosofias}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="climax-Arco">
                                        <p className="subtitulo-Infos">Ponto critico / Clímax</p>
                                        <p className="texto-Infos">{arco.climax}</p>
                                    </div>

                                    <button className="botao-Explorar-Arco">Explorar arco</button>
                                </div>

                                <div className="direita-Card">
                                    <img src={arco.img} alt={arco.titulo} />
                                    <div className="resumoArco">
                                        <p className="resultado-Arco"><span>Resultado:</span> {arco.resultado}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}