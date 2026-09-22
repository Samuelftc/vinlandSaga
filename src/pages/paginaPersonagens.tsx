import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import "../styles/pages/paginaPersonagens.css";

export interface buttonFiltro {
    id: number,
    texto: string
}

const listaBotoesFiltro: buttonFiltro[] = [
    {
        id: 1,
        texto: "Todos"
    },
    {
        id: 2,
        texto: "Bando de askeladd"
    },
    {
        id: 3,
        texto: "Jomsvikings"
    },
    {
        id: 4,
        texto: "Realeza dinamarquesa / anglo-saxões"
    },
    {
        id: 5,
        texto: "Islândia e exploradores"
    },
    {
        id: 6,
        texto: "Fazenda de Ketil"
    },
]

export default function PaginaPersonagens() {
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
                                    <p style={{ color: "var(--color-accent-secondary)" }}>120+</p>
                                    <p>registrados</p>
                                </li>
                                <li>
                                    <p style={{ color: "var(--color-text-white)" }}>4 grandes</p>
                                    <p>facções</p>
                                </li>
                                <li>
                                    <p style={{ color: "var(--color-accent-secondary)" }}>nível aaa</p>
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
                                    <button className="buttonAfiliacao">{botao.texto}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="divSelecteds">
                        <div>
                            <label htmlFor="selectTemporada">Temporada e mídia</label>
                            <select name="selectTemporada" id="selectTemporada">
                                <option value="todas">Todas temporadas</option>
                                <option value="temporada1">Temporada 1</option>
                                <option value="temporada2">Temporada 2</option>
                                <option value="manga">Mangá</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="selectVital">Status vital</label>
                            <select name="selectVital" id="selectVital">
                                <option value="todos">Todos</option>
                                <option value="vivo">Vivo</option>
                                <option value="morto">Morto</option>
                            </select>
                        </div>
                    </div>

                    <div className="rodapeFiltros">
                        <p>Mostrando 12 de 124 guerreiros</p>
                        <ul className="ulBotoesFiltro">
                            <li>
                                <button className="botaoAplicarFiltro">Filtrar</button>
                            </li>

                            <li>
                                <button className="botaoLimparFiltro">Limpar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}