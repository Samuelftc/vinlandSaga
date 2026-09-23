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
                <div className="topoMain">
                    <nav aria-label="Breadcrumb">
                        <ul className="filaNav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/personagens">Personagens</Link></li>
                            <li className="ramoAtual" aria-current="page">Dossiês & registros nórdicos</li>
                        </ul>
                    </nav>

                    <div className="topoMainTextos">
                        <h1>Códice de guerreiros & <br /> <span>personagens</span></h1>
                        <div className="informacoesInferioresTopo">
                            <p>Exploração exaustiva dos heróis trágicos, mercenários impiedosos, monarcas bretões e dinamarqueses e colonos que moldaram a crônica sangrenta da Escandinávia e Inglaterra do século XI.</p>

                            <ul className="ulBadges">
                                <li>
                                    <p className="badgeNumero">{personagensData.length}+</p>
                                    <p>registrados</p>
                                </li>
                                <li>
                                    <p className="badgeNumeroWhite">6 grandes</p>
                                    <p>facções</p>
                                </li>
                                <li>
                                    <p className="badgeNumero">nível aaa</p>
                                    <p>rigor canônico</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="divSelecaoFiltros">
                    <div className="divAfiliacao">
                        <p>Facção / afiliação viking:</p>
                        <ul className="ulAfiliacoes">
                            {listaBotoesFiltro.map((botao) => (
                                <li className="liAfiliacao" key={botao.id}>
                                    <button
                                        className={`buttonAfiliacao ${filtroAfiliacao === botao.valor ? 'ativo' : ''}`}
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

                    <div className="divSelecteds">
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

                    <div className="rodapeFiltros">
                        <p>Mostrando {indiceInicio + 1} de {personagensFiltrados.length} guerreiros</p>
                        <ul className="ulBotoesFiltro">
                            <li>
                                <button className="botaoLimparFiltro" onClick={handleLimparFiltros}>Limpar</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="secaoPersonagens">
                    {personagensExibidos.length > 0 ? (
                        <>
                            <ul className="listaDePersonagens">
                                {personagensExibidos.map((personagem) => (
                                    <li className="liPersonagem" key={personagem.id}>
                                        <article>
                                            <div className="divImagemPersonagem">
                                                <img src={personagem.image} alt={personagem.nome} />
                                                <p className="origemPersonagem">{personagem.origem}</p>
                                            </div>
                                            <div className="informacoesPersonagem">
                                                <div className="informacoesSuperioresPersonagem">
                                                    <h4>{personagem.nome}</h4>
                                                    <p>{personagem.descMinima}</p>
                                                </div>
                                                <div className="informacoesInferioresPersonagem">
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
                                        className="botaoPaginacao"
                                    >
                                        Anterior
                                    </button>

                                    <div className="numeroPaginas">
                                        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => setPaginaAtual(num)}
                                                className={`numeroPagina ${paginaAtual === num ? 'ativo' : ''}`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))}
                                        disabled={paginaAtual === totalPaginas}
                                        className="botaoPaginacao"
                                    >
                                        Próximo
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="nenhumResultado">
                            <p>Nenhum personagem encontrado com esses filtros.</p>
                            <button className="botaoLimparFiltro" onClick={handleLimparFiltros}>
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
