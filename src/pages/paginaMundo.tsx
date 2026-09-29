import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import { MapPin } from "lucide-react";

import '../styles/pages/paginaMundo.css'
import { regioes } from "../data/Regioes";

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
            </main>
            <Footer />
        </>
    );
}
