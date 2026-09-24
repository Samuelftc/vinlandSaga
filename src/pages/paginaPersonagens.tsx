import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import "../styles/pages/paginaPersonagens.css";

import { personagensData } from "../data/Personagens";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Footer from "../components/layout/Footer";

interface buttonFiltro {
    id: number,
    texto: string,
    valor: string
}

const listaBotoesFiltro: buttonFiltro[] = [
    {
        id: 1,
        texto: "Todos",
        valor: "todos"
    },
    {
        id: 2,
        texto: "Bando de askeladd",
        valor: "Bando de Askeladd"
    },
    {
        id: 3,
        texto: "Jomsvikings",
        valor: "Jomsvikings"
    },
    {
        id: 4,
        texto: "Realeza dinamarquesa / anglo-saxões",
        valor: "Realeza dinamarquesa / anglo-saxões"
    },
    {
        id: 5,
        texto: "Islândia e exploradores",
        valor: "Islândia e exploradores"
    },
    {
        id: 6,
        texto: "Fazenda de Ketil",
        valor: "Fazenda de Ketil"
    },
]

const ITEMS_POR_PAGINA = 12;

export default function PaginaPersonagens() {
    const [filtroAfiliacao, setFiltroAfiliacao] = useState<string>("todos");
    const [filtroTemporada, setFiltroTemporada] = useState<string>("todas");
    const [filtroStatus, setFiltroStatus] = useState<string>("todos");
    const [paginaAtual, setPaginaAtual] = useState<number>(1);

    const personagensFiltrados = personagensData.filter((p) => {
        const afiliacaoOk = filtroAfiliacao === "todos" || p.afiliacao === filtroAfiliacao;
        const temporadaOk = filtroTemporada === "todas" || (p.temporadas?.includes(filtroTemporada) ?? false);
        const statusOk = filtroStatus === "todos" || p.status === filtroStatus;
        return afiliacaoOk && temporadaOk && statusOk;
    });

    const totalPaginas = Math.ceil(personagensFiltrados.length / ITEMS_POR_PAGINA);
    const indiceInicio = (paginaAtual - 1) * ITEMS_POR_PAGINA;
    const indiceFim = indiceInicio + ITEMS_POR_PAGINA;
    const personagensExibidos = personagensFiltrados.slice(indiceInicio, indiceFim);

    const handleLimparFiltros = () => {
        setFiltroAfiliacao("todos");
        setFiltroTemporada("todas");
        setFiltroStatus("todos");
        setPaginaAtual(1);
    };

    return (
        <>
            <Header />
            <main>
                <div className="topo-header">
                    <nav aria-label="Breadcrumb">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/personagens">Personagens</Link></li>
                            <li className="breadcrumb-ativo" aria-current="page">Dossiês & registros nórdicos</li>
                        </ul>
                    </nav>

                    <div className="topo-conteudo">
                        <h1>Códice de guerreiros & <br /> <span>personagens</span></h1>
                        <div className="info-top">
                            <p>Exploração exaustiva dos heróis trágicos, mercenários impiedosos, monarcas bretões e dinamarqueses e colonos que moldaram a crônica sangrenta da Escandinávia e Inglaterra do século XI.</p>

                            <ul className="badges-lista">
                                <li>
                                    <p className="badge-valor">{personagensData.length}+</p>
                                    <p>registrados</p>
                                </li>
                                <li>
                                    <p className="badge-claro">6 grandes</p>
                                    <p>facções</p>
                                </li>
                                <li>
                                    <p className="badge-valor">nível aaa</p>
                                    <p>rigor canônico</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="painel-filtros">
                    <div className="grupo-afiliacao">
                        <p>Facção / afiliação viking:</p>
                        <ul className="lista-afiliacao">
                            {listaBotoesFiltro.map((botao) => (
                                <li key={botao.id}>
                                    <button
                                        className={`botao-afiliacao ${filtroAfiliacao === botao.valor ? 'ativo' : ''}`}
                                        onClick={() => {
                                            setFiltroAfiliacao(botao.valor);
                                            setPaginaAtual(1);
                                        }}
                                    >
                                        {botao.texto}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grupo-selects">
                        <div>
                            <label htmlFor="selectTemporada">Temporada e mídia</label>
                            <select
                                name="selectTemporada"
                                id="selectTemporada"
                                value={filtroTemporada}
                                onChange={(e) => {
                                    setFiltroTemporada(e.target.value);
                                    setPaginaAtual(1);
                                }}
                            >
                                <option value="todas">Todas temporadas</option>
                                <option value="S1">Temporada 1</option>
                                <option value="S2">Temporada 2</option>
                                <option value="Mangá">Mangá</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="selectVital">Status vital</label>
                            <select
                                name="selectVital"
                                id="selectVital"
                                value={filtroStatus}
                                onChange={(e) => {
                                    setFiltroStatus(e.target.value);
                                    setPaginaAtual(1);
                                }}
                            >
                                <option value="todos">Todos</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Morto">Morto</option>
                            </select>
                        </div>
                    </div>

                    <div className="rodape-filtros">
                        <p>Mostrando {indiceInicio + 1} de {personagensFiltrados.length} guerreiros</p>
                        <ul className="botoes-filtro">
                            <li>
                                <button className="botao-limpar" onClick={handleLimparFiltros}>Limpar</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="secaoPersonagens">
                    {personagensExibidos.length > 0 ? (
                        <>
                            <ul className="lista-personagens">
                                {personagensExibidos.map((personagem) => (
                                    <li className="card-personagem" key={personagem.id}>
                                        <article>
                                            <div className="imagem-personagem">
                                                <img src={personagem.image} alt={personagem.nome} />
                                                <p className="origem-badge">{personagem.origem}</p>
                                            </div>
                                            <div className="info-card">
                                                <div className="info-superior">
                                                    <h4>{personagem.nome}</h4>
                                                    <p>{personagem.descMinima}</p>
                                                </div>
                                                <div className="info-inferior">
                                                    <span>{personagem.temporadas}</span>
                                                    <Link to={`/personagens/${personagem.id}`}>Ver Dossiê <ArrowRight size={20} /></Link>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>

                            {totalPaginas > 1 && (
                                <div className="paginacao">
                                    <button
                                        onClick={() => setPaginaAtual(p => Math.max(1, p - 1))}
                                        disabled={paginaAtual === 1}
                                        className="botao-pag"
                                    >
                                        Anterior
                                    </button>

                                    <div className="numeros-pagina">
                                        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => setPaginaAtual(num)}
                                                className={`numero-pagina ${paginaAtual === num ? 'ativo' : ''}`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))}
                                        disabled={paginaAtual === totalPaginas}
                                        className="botao-pag"
                                    >
                                        Próximo
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="nenhum-resultado">
                            <p>Nenhum personagem encontrado com esses filtros.</p>
                            <button className="botao-limpar" onClick={handleLimparFiltros}>
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
