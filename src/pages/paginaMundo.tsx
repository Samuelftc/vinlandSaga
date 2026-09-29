import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import { MapPin } from "lucide-react";

import '../styles/pages/paginaMundo.css'
import { regioes } from "../data/Regioes";
import { fichasGeopoliticas } from "../data/FichasGeopoliticas";
import { engenhariaNaval } from "../data/EngenhariaNaval";

export default function PaginaMundo() {
    return (
        <>
            <Header />
            <main>
                <section className="topo-header">
                    <nav aria-label="Breadcrumb">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/mundo">Mundo</Link></li>
                            <li className="breadcrumb-ativo" aria-current="page">Cartografia & Geografia</li>
                        </ul>
                    </nav>

                    <div className="topo-conteudo">
                        <h1>O Mundo de Vinland Saga</h1>
                        <div className="info-top">
                            <p>Uma jornada através dos continentes que moldaram a epopeia de Thorfinn Karlsefni: das terras congeladas do norte até a utopia verde da América medieval.</p>
                        </div>
                    </div>
                </section>

                <section className="atlas-interativo">
                    <div className="cabecalho-Atlas">
                        <h2>Grande Atlas Interativo das Regiões da Saga</h2>
                        <p className="filtro-Coords">Filtro de Coordenadas: 45°N a 66°N</p>
                    </div>

                    <div className="grid-Regioes">
                        {regioes.map((regiao) => (
                            <div className="card-Regiao" key={regiao.id}>
                                <div className="topo-Card-Regiao">
                                    <div className="nome-Coords">
                                        <span className="icone-Regiao">{regiao.icone}</span>
                                        <h3>{regiao.nome}</h3>
                                    </div>
                                    <p className="coords-Regiao">{regiao.coordenadas}</p>
                                </div>

                                {regiao.statusAcesso === "ZONA DE GUERRA" && (
                                    <p className="badge-Status">ZONA DE GUERRA</p>
                                )}

                                <div className="corpo-Card-Regiao">
                                    <p className="descricao-Regiao">{regiao.descricao}</p>

                                    <div className="info-Regiao">
                                        <div>
                                            <p className="label-Info">Clima Dominante:</p>
                                            <p className="valor-Info">{regiao.climaticaDominante}</p>
                                        </div>
                                    </div>

                                    <div className="info-Regiao">
                                        <div>
                                            <p className="label-Info">Importância na Trama:</p>
                                            <p className="valor-Info">{regiao.importanciaTrama}</p>
                                        </div>
                                    </div>

                                    <div className="info-Regiao">
                                        <div>
                                            <p className="label-Info">Figuras Chave:</p>
                                            <p className="valor-Info">{regiao.figurasChave.join(", ")}</p>
                                        </div>
                                    </div>

                                    {regiao.notaAdicional && (
                                        <div className="info-Regiao">
                                            <p className="nota-Adicional">{regiao.notaAdicional.toUpperCase()}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="rodape-Card-Regiao">
                                    <p className="status-Acesso">Status de Acesso:</p>
                                    <p className="valor-Status">{regiao.statusAcesso}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="fichas-geopoliticas">
                    <div className="cabecalho-Fichas">
                        <h2>Ficha Geopolítica & Nações da Época</h2>
                        <p className="subtitulo-Fichas">Balanço Militar & Doutrinas Século XI</p>
                    </div>

                    <div className="tabela-Geopolitica">
                        <div className="cabecalho-Tabela">
                            <div className="coluna-Faccao">Facção / Estado</div>
                            <div className="coluna-Territorio">Território Nuclear</div>
                            <div className="coluna-Doutrina">Doutrina & Força Militar</div>
                            <div className="coluna-Lideranca">Liderança Canônica</div>
                            <div className="coluna-Relacao">Relação com Vinland</div>
                        </div>

                        {fichasGeopoliticas.map((ficha) => (
                            <div className={`linha-Ficha ficha-${ficha.statusRelacao}`} key={ficha.id}>
                                <div className="coluna-Faccao">
                                    <p className="nome-Faccao">{ficha.faccao}</p>
                                    <p className="desc-Faccao">{ficha.descricaoEstado}</p>
                                </div>
                                <div className="coluna-Territorio">
                                    <p className="valor-Territorio">{ficha.territoriNuclear}</p>
                                </div>
                                <div className="coluna-Doutrina">
                                    <p className="valor-Doutrina">{ficha.doutrinas}</p>
                                </div>
                                <div className="coluna-Lideranca">
                                    <p className="valor-Lideranca">{ficha.liderancaCanonica}</p>
                                </div>
                                <div className="coluna-Relacao">
                                    <p className="valor-Relacao">{ficha.relacaoVinland}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="engenharia-naval">
                    <div className="cabecalho-Engenharia">
                        <h2>Engenharia Náutica & Sobrevivência no Atlântico</h2>
                        <p className="subtitulo-Engenharia">Arquitetura Clinker & Orientação Polar</p>
                    </div>

                    <div className="grid-Vessels">
                        {engenhariaNaval.map((vessel) => (
                            <div className={`card-Vessel card-${vessel.categoria}`} key={vessel.id}>
                                <div className="topo-Card-Vessel">
                                    <div className="tipo-Vessel">{vessel.tipo}</div>
                                    <div className="icone-Vessel">{vessel.icone}</div>
                                </div>

                                <div className="corpo-Card-Vessel">
                                    <div className="nome-Vessel">
                                        <h3>{vessel.nomeVeiculo}</h3>
                                        <p className="nome-Alterno">{vessel.nomeAlterno}</p>
                                    </div>

                                    <p className="descricao-Vessel">{vessel.descricao}</p>

                                    <div className="especificacoes-Vessel">
                                        {vessel.especificacoes.comprimento && (
                                            <div className="item-Esp">
                                                <p className="label-Esp">Comprimento Nédio:</p>
                                                <p className="valor-Esp">{vessel.especificacoes.comprimento}</p>
                                            </div>
                                        )}
                                        {vessel.especificacoes.propulsao && (
                                            <div className="item-Esp">
                                                <p className="label-Esp">Propulsão{vessel.id === 2 ? ' Primária' : ''}:</p>
                                                <p className="valor-Esp">{vessel.especificacoes.propulsao}</p>
                                            </div>
                                        )}
                                        {vessel.especificacoes.velocidade && (
                                            <div className="item-Esp">
                                                <p className="label-Esp">Velocidade Máxima:</p>
                                                <p className="valor-Esp">{vessel.especificacoes.velocidade}</p>
                                            </div>
                                        )}
                                        {vessel.especificacoes.capacidade && (
                                            <div className="item-Esp">
                                                <p className="label-Esp">Capacidade de Carga:</p>
                                                <p className="valor-Esp">{vessel.especificacoes.capacidade}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="finalidade-Vessel">
                                        <p className="label-Finalidade">Finalidade Canônica:</p>
                                        <p className="valor-Finalidade">{vessel.finalidadeCanonica}</p>
                                    </div>

                                    {vessel.id === 3 && vessel.recursoEspecial && (
                                        <div className="mecanismo-Orientacao">
                                            <p className="label-Mecanismo">⚔ Mecanismo de Orientação:</p>
                                            <p className="valor-Mecanismo">{vessel.recursoValor}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="rodape-Card-Vessel">
                                    {vessel.id !== 3 ? (
                                        <>
                                            <p className="label-Recurso">{vessel.recursoEspecial}</p>
                                            <p className="valor-Recurso">{vessel.recursoValor}</p>
                                        </>
                                    ) : (
                                        <>
                                            <div className="artefato-Leif">
                                                <p className="label-Artefato">{vessel.artefato}</p>
                                                <p className="valor-Navegacao">{vessel.navegacao}</p>
                                            </div>
                                        </>
                                    )}
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
