import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { BookOpen, Filter, Scale, Swords } from "lucide-react";
import '../styles/pages/paginaBatalhas.css'

import { batalhas } from "../data/Batalhas";

export default function PaginaBatalhas() {
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
                        <li>
                            <button className="botao-Filtro-Batalha active">Todos os Arcos</button>
                        </li>
                        <li>
                            <button className="botao-Filtro-Batalha">1. Arco do Prólogo</button>
                        </li>
                        <li>
                            <button className="botao-Filtro-Batalha">2. Arco da Escravidão</button>
                        </li>
                        <li>
                            <button className="botao-Filtro-Batalha">3. Arco da expedição ao leste</button>
                        </li>
                        <li>
                            <button className="botao-Filtro-Batalha">4. Arco de Vinland</button>
                        </li>
                    </ul>
                </div>

                <section className="batalhas">
                    <div>
                        <h2>1. Arco do Prólogo <span>(Primeira Temporada do Anime)</span></h2>

                        <div>
                            {batalhas.slice(0, 4).map((batalha) => (
                                <article key={batalha.id}>
                                    <div>
                                        <p>Teatro: {batalha.teatro}</p>
                                        <p>Registro Prólogo #0{batalha.id}</p>
                                    </div>

                                    <div className="esquerda">
                                        <div>
                                            <h3>{batalha.titulo}</h3>
                                            <p>{batalha.lugares}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <p>{batalha.subtituloDefesa}</p>
                                                <h5>{batalha.tituloDefesa}</h5>
                                                <p>{batalha.textoDefesa}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.subtituloAtaque}</p>
                                                <h5>{batalha.tituloAtaque}</h5>
                                                <p>{batalha.textoAtaque}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Dinâmica do confronto</p>
                                            <p>{batalha.descBatalha}</p>
                                        </div>
                                        <div>
                                            <p>Tática Dominante:</p>
                                            <p>{batalha.tatica}</p>
                                            <p>Impacto na saga:</p>
                                            <p>Falta implementar o dado</p>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <img src={batalha.imagem} alt={batalha.titulo} />
                                        <div>
                                            <div>
                                                <p>{batalha.questaoResumo1}</p>
                                                <p>{batalha.respostaResumo1}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo2}</p>
                                                <p>{batalha.respostaResumo2}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo3}</p>
                                                <p>{batalha.respostaResumo3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>2. Arco da Fazenda de Ketil <span>(Segunda Temporada do Anime)</span></h2>

                        <div>
                            {batalhas.slice(4, 7).map((batalha) => (
                                <article key={batalha.id}>
                                    <div>
                                        <p>Teatro: {batalha.teatro}</p>
                                        <p>Registro Prólogo #0{batalha.id}</p>
                                    </div>

                                    <div className="esquerda">
                                        <div>
                                            <h3>{batalha.titulo}</h3>
                                            <p>{batalha.lugares}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <p>{batalha.subtituloDefesa}</p>
                                                <h5>{batalha.tituloDefesa}</h5>
                                                <p>{batalha.textoDefesa}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.subtituloAtaque}</p>
                                                <h5>{batalha.tituloAtaque}</h5>
                                                <p>{batalha.textoAtaque}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Dinâmica do confronto</p>
                                            <p>{batalha.descBatalha}</p>
                                        </div>
                                        <div>
                                            <p>Tática Dominante:</p>
                                            <p>{batalha.tatica}</p>
                                            <p>Impacto na saga:</p>
                                            <p>Falta implementar o dado</p>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <img src={batalha.imagem} alt={batalha.titulo} />
                                        <div>
                                            <div>
                                                <p>{batalha.questaoResumo1}</p>
                                                <p>{batalha.respostaResumo1}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo2}</p>
                                                <p>{batalha.respostaResumo2}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo3}</p>
                                                <p>{batalha.respostaResumo3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>3. Arco da Expedição ao leste <span>(Exclusivo do Mangá)</span></h2>

                        <div>
                            {batalhas.slice(7, 10).map((batalha) => (
                                <article key={batalha.id}>
                                    <div>
                                        <p>Teatro: {batalha.teatro}</p>
                                        <p>Registro Prólogo #0{batalha.id}</p>
                                    </div>

                                    <div className="esquerda">
                                        <div>
                                            <h3>{batalha.titulo}</h3>
                                            <p>{batalha.lugares}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <p>{batalha.subtituloDefesa}</p>
                                                <h5>{batalha.tituloDefesa}</h5>
                                                <p>{batalha.textoDefesa}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.subtituloAtaque}</p>
                                                <h5>{batalha.tituloAtaque}</h5>
                                                <p>{batalha.textoAtaque}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Dinâmica do confronto</p>
                                            <p>{batalha.descBatalha}</p>
                                        </div>
                                        <div>
                                            <p>Tática Dominante:</p>
                                            <p>{batalha.tatica}</p>
                                            <p>Impacto na saga:</p>
                                            <p>Falta implementar o dado</p>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <img src={batalha.imagem} alt={batalha.titulo} />
                                        <div>
                                            <div>
                                                <p>{batalha.questaoResumo1}</p>
                                                <p>{batalha.respostaResumo1}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo2}</p>
                                                <p>{batalha.respostaResumo2}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo3}</p>
                                                <p>{batalha.respostaResumo3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>4. Arco de Vinland <span>(Reta final do Mangá)</span></h2>

                        <div>
                            {batalhas.slice(10, 11).map((batalha) => (
                                <article key={batalha.id}>
                                    <div>
                                        <p>Teatro: {batalha.teatro}</p>
                                        <p>Registro Prólogo #0{batalha.id}</p>
                                    </div>

                                    <div className="esquerda">
                                        <div>
                                            <h3>{batalha.titulo}</h3>
                                            <p>{batalha.lugares}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <p>{batalha.subtituloDefesa}</p>
                                                <h5>{batalha.tituloDefesa}</h5>
                                                <p>{batalha.textoDefesa}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.subtituloAtaque}</p>
                                                <h5>{batalha.tituloAtaque}</h5>
                                                <p>{batalha.textoAtaque}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>Dinâmica do confronto</p>
                                            <p>{batalha.descBatalha}</p>
                                        </div>
                                        <div>
                                            <p>Tática Dominante:</p>
                                            <p>{batalha.tatica}</p>
                                            <p>Impacto na saga:</p>
                                            <p>Falta implementar o dado</p>
                                        </div>
                                    </div>
                                    <div className="direita">
                                        <img src={batalha.imagem} alt={batalha.titulo} />
                                        <div>
                                            <div>
                                                <p>{batalha.questaoResumo1}</p>
                                                <p>{batalha.respostaResumo1}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo2}</p>
                                                <p>{batalha.respostaResumo2}</p>
                                            </div>
                                            <div>
                                                <p>{batalha.questaoResumo3}</p>
                                                <p>{batalha.respostaResumo3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}