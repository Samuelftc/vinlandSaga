import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { BookOpen, Filter, MapPin, Scale, Swords } from "lucide-react";
import '../styles/pages/paginaBatalhas.css'
import { useState } from "react";

import { batalhas } from "../data/Batalhas";
import Footer from "../components/layout/Footer";

export default function PaginaBatalhas() {
    const [arcoSelecionado, setArcoSelecionado] = useState<number | null>(null);

    const arcos = [
        { id: null, nome: "Todos os Arcos" },
        { id: 1, nome: "1. Arco do Prólogo", range: [0, 4] },
        { id: 2, nome: "2. Arco da Escravidão", range: [4, 7] },
        { id: 3, nome: "3. Arco da expedição ao leste", range: [7, 10] },
        { id: 4, nome: "4. Arco de Vinland", range: [10, 11] }
    ];

    const renderBatalhasPorArco = () => {
        if (arcoSelecionado === null) {
            return (
                <>
                    <div>
                        <h2 className="titulo-Batalha-Arco">1. Arco do Prólogo <span>(Primeira Temporada do Anime)</span></h2>
                        <div className="lista-Batalhas">
                            {batalhas.slice(0, 4).map((batalha) => renderCard(batalha))}
                        </div>
                    </div>
                    <div>
                        <h2 className="titulo-Batalha-Arco">2. Arco da Fazenda de Ketil <span>(Segunda Temporada do Anime)</span></h2>
                        <div className="lista-Batalhas">
                            {batalhas.slice(4, 7).map((batalha) => renderCard(batalha))}
                        </div>
                    </div>
                    <div>
                        <h2 className="titulo-Batalha-Arco">3. Arco da Expedição ao leste <span>(Exclusivo do Mangá)</span></h2>
                        <div className="lista-Batalhas">
                            {batalhas.slice(7, 10).map((batalha) => renderCard(batalha))}
                        </div>
                    </div>
                    <div>
                        <h2 className="titulo-Batalha-Arco">4. Arco de Vinland <span>(Reta final do Mangá)</span></h2>
                        <div className="lista-Batalhas">
                            {batalhas.slice(10, 11).map((batalha) => renderCard(batalha))}
                        </div>
                    </div>
                </>
            );
        }

        const arcoInfo = arcos.find(a => a.id === arcoSelecionado);
        if (!arcoInfo || !arcoInfo.range) return null;

        const [inicio, fim] = arcoInfo.range;
        const titulosArcos = [
            { titulo: "1. Arco do Prólogo", subtitulo: "(Primeira Temporada do Anime)" },
            { titulo: "2. Arco da Fazenda de Ketil", subtitulo: "(Segunda Temporada do Anime)" },
            { titulo: "3. Arco da Expedição ao leste", subtitulo: "(Exclusivo do Mangá)" },
            { titulo: "4. Arco de Vinland", subtitulo: "(Reta final do Mangá)" }
        ];

        const tituloArco = titulosArcos[arcoSelecionado - 1];

        return (
            <div>
                <h2 className="titulo-Batalha-Arco">{tituloArco.titulo} <span>{tituloArco.subtitulo}</span></h2>
                <div className="lista-Batalhas">
                    {batalhas.slice(inicio, fim).map((batalha) => renderCard(batalha))}
                </div>
            </div>
        );
    };

    const renderCard = (batalha: typeof batalhas[0]) => (
        <article className="card-Batalha" key={batalha.id}>
            <div className="card-Top-Batalha">
                <p className="texto-Teatro">Teatro: {batalha.teatro}</p>
                <p className="texto-Registro">Registro De Batalha #0{batalha.id}</p>
            </div>

            <div className="card-Corpo-Batalha">
                <div className="esquerda-card-Batalha">
                    <div className="div-Titulo-Batalha">
                        <h3>{batalha.titulo}</h3>
                        <p><MapPin size={18} />  {batalha.lugares}</p>
                    </div>
                    <div className="defesas-Forcas">
                        <div>
                            <p className="DF-Subtitulo">{batalha.subtituloDefesa}</p>
                            <h5 className="DF-Titulo">{batalha.tituloDefesa}</h5>
                            <p className="DF-Texto">{batalha.textoDefesa}</p>
                        </div>
                        <div>
                            <p className="DF-Subtitulo">{batalha.subtituloAtaque}</p>
                            <h5 className="DF-Titulo">{batalha.tituloAtaque}</h5>
                            <p className="DF-Texto">{batalha.textoAtaque}</p>
                        </div>
                    </div>
                    <div className="div-Desc-Batalha">
                        <label>Dinâmica do confronto</label>
                        <p className="desc-Batalha">{batalha.descBatalha}</p>
                    </div>
                    <div className="div-Tatica">
                        <label>Tática Dominante:</label>
                        <p>{batalha.tatica}</p>
                        <label>Impacto na saga:</label>
                        <p>Falta implementar o dado</p>
                    </div>
                </div>
                <div className="direita-Card-Batalha">
                    <img className="imagem-Batalha" src={batalha.imagem} alt={batalha.titulo} />
                    <div className="resumos-Batalha">
                        <div>
                            <label>{batalha.questaoResumo1}</label>
                            <p>{batalha.respostaResumo1}</p>
                        </div>
                        <div>
                            <label>{batalha.questaoResumo2}</label>
                            <p>{batalha.respostaResumo2}</p>
                        </div>
                        <div>
                            <label>{batalha.questaoResumo3}</label>
                            <p>{batalha.respostaResumo3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );

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

                <div className="filtros-Batalhas">
                    <p><Filter size={18} color="#FFB3B1" /> Filtrar por Arco:</p>

                    <ul className="lista-Filtros-Batalhas">
                        {arcos.map((arco) => (
                            <li key={arco.id}>
                                <button
                                    className={`botao-Filtro-Batalha ${arcoSelecionado === arco.id ? 'active' : ''}`}
                                    onClick={() => setArcoSelecionado(arco.id)}
                                >
                                    {arco.nome}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <section className="batalhas">
                    {renderBatalhasPorArco()}
                </section>
            </main>

            <Footer />
        </>
    );
}