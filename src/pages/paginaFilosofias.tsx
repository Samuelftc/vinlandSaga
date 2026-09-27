import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { Compass, Crown, Dumbbell, Leaf, Scale, Swords } from "lucide-react";
import Footer from "../components/layout/Footer";

import '../styles/pages/paginaFilosofias.css'
import { ideologias } from "../data/Ideologias";
import { teses } from "../data/Teses";
import { reflexoes } from "../data/Reflexoes";
import { vozesMorais } from "../data/VozesMorais";
import { Eye, Cog, ArrowRight } from "lucide-react";

export default function PaginaFilosofias() {
    return (
        <>
            <Header />
            <main>
                <section className="topo-header">
                    <nav aria-label="Breadcrumb">
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/filosofias">Filosofias</Link></li>
                            <li className="breadcrumb-ativo" aria-current="page">Filosofias e caminho</li>
                        </ul>
                    </nav>

                    <div className="topo-conteudo topo-Filosofia">
                        <h1>Filosofia, Moral e o caminho do guerreiro</h1>
                        <div className="info-top-Filosofias">
                            <p>Uma investigação sobre as forças ideológicas que moldam Vinland Saga: da glória sangrenta do
                                Valhalla nórdico ao pragmatismo imperial de Canute e à revolução pacifista radical inaugurada por Thors
                                e forjada por Thorfinn.</p>
                        </div>
                        <ul className="cards-top-lista-Filosofias">
                            <li className="card-top-Filosofia">
                                <article>
                                    <div className="topo-Card-Filosofia">
                                        <p className="pilar-Teorico">Pilar teórico I</p>
                                        <Scale size={20} color="#AB8987" />
                                    </div>
                                    <h5 className="">3 Grandes Doutrinas</h5>
                                    <p className="card-texto-Filosofias">Belicismo ancestral, Imperialismo Monárquico e Não-
                                        Violência Radical em colisão constante pela alma
                                        humana.</p>
                                </article>
                            </li>
                            <li className="card-top-Filosofia">
                                <article>
                                    <div className="topo-Card-Filosofia">
                                        <p className="pilar-Teorico">Pilar teórico II</p>
                                        <Compass size={20} color="#AB8987" />
                                    </div>
                                    <h5 className="">O dilema de Vinland</h5>
                                    <p className="card-texto-Filosofias">A utopia de uma terra fértil onde a espada de ferro é
                                        banida por decreto moral perante o medo da
                                        sobrevivência.</p>
                                </article>
                            </li>
                            <li className="card-top-Filosofia">
                                <article>
                                    <div className="topo-Card-Filosofia">
                                        <p className="pilar-Teorico">Pilar teórico III</p>
                                        <Dumbbell size={20} color="#AB8987" />
                                    </div>
                                    <h5 className="">100 socos de drott</h5>
                                    <p className="card-texto-Filosofias">O teste definitivo da carne humana suportando a
                                        brutalidade crua para romper a espiral milenar do
                                        revide e da vingança.</p>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="ideologias-Fundamentais">
                    <div className="secao-Titulo-Ideologias">
                        <h2>O Triângulo Ideológico Fundamental</h2>
                        <p>Três visões irreconciliáveis de mundo disputando a soberania sobre o destino nórdico e cristão do início do segundo milênio.</p>
                    </div>

                    <div className="ideologias-Principais">
                        {ideologias.map((ideologia, index) => {
                            const icones = [<Swords key="swords" />, <Crown key="crown" />, <Leaf key="leaf" />];

                            return (
                                <div className={`card-Ideologia ${index === 2 ? 'ativa' : ''}`} key={ideologia.id}>
                                    <div className="topo-Card-Ideologia">
                                        <p className="titulo-Ideologia-Badge">{ideologia.id === 1 ? 'Norse Belicismo' : ideologia.id === 2 ? 'Realpolitik Coercitiva' : 'Utopia & Não-Violência'}</p>
                                        {icones[index]}
                                    </div>
                                    <div className="corpo-Card-Ideologia">
                                        <h3>{ideologia.titulo}</h3>
                                        <p className="subtitulo-Card-Ideologia">{ideologia.subtitulo}</p>
                                        <p className="resumo-Ideologia">{ideologia.resumo}</p>
                                        <div className="div-Fala-Ideologia">
                                            <p className="frase-Card-Ideologia">"{ideologia.frase}"</p>
                                            <p className="nome-Frase">- {ideologia.personagem}</p>
                                        </div>
                                        <div className="div-Axioma">
                                            <p className="axioma-Fundamental">Axioma Fundamental</p>
                                            <p className="frase-Axioma">"{ideologia.axioma}"</p>
                                        </div>
                                    </div>
                                    <div className="rodape-Card-Ideologia">
                                        <p>Figuras Arquetípicas:</p>
                                        <ul className="lista-Figuras-Arquetipas">
                                            {ideologia.figuras.map((figura) => (
                                                <li key={figura} className="figura-Arquetipa">{figura}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="dossie-Hermeneutico">
                    <div className="cabecalho-Dossie">
                        <p className="etiqueta-Dossie">Dossié Hermenêutico Profundo</p>
                        <h2>A Metamorfose do Perdão & O Peso da Expiação</h2>
                    </div>

                    <div className="grid-Reflexoes">
                        {reflexoes.map((reflexao) => (
                            <div className="card-Reflexao" key={reflexao.id}>
                                <div className="numero-Reflexao">
                                    <span>0{reflexao.id}</span>
                                </div>
                                <h3>{reflexao.titulo}</h3>
                                <p className="resumo-Reflexao">{reflexao.resumo}</p>
                                <div className="insight-Box">
                                    <p>{reflexao.insight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="teses-Yukimura">
                    <div className="secao-Titulo-Teses">
                        <h2>As Grandes Questões Existenciais de Yukimura</h2>
                    </div>

                    <div className="grid-Teses">
                        {teses.map((tese, index) => {
                            const icones = [<Eye key="eye" />, <Cog key="cog" />, <Eye key="eye2" />, <Eye key="eye3" />];

                            return (
                                <div className="card-Tese" key={tese.id}>
                                    <div className="topo-Card-Tese">
                                        <p className="badge-Tese">Tese Filosófica 0{tese.id}</p>
                                        {icones[index]}
                                    </div>
                                    <div className="corpo-Card-Tese">
                                        <h3>{tese.titulo}</h3>
                                        <p className="descricao-Tese">{tese.descricao}</p>
                                        <div className="footer-Card-Tese">
                                            <div>
                                                <p className="label-Eixo">Eixo:</p>
                                                <p className="eixo-Tese">{tese.eixo}</p>
                                            </div>
                                            <p className="capitulo-Tese">Cap. {tese.capitulo}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="mural-Vozes-Morais">
                    <h2>Mural das Vozes Morais</h2>
                    <div className="grid-Vozes">
                        {vozesMorais.map((voz) => (
                            <div className="card-Voz-Moral" key={voz.id}>
                                <p className="numero-Voz">99</p>
                                <p className="citacao-Voz">"{voz.citacao}"</p>
                                <div className="footer-Voz">
                                    <p className="personagem-Voz">{voz.personagem}</p>
                                    <p className="contexto-Voz">{voz.contexto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="conclusao-Enciclopedia">
                    <div className="conteudo-Conclusao">
                        <p className="etiqueta-Conclusao">⚔ Conclusão Dialética da Enciclopédia</p>
                        <h2>A Superação Definitiva da Espiral da Destruição</h2>
                        <p className="texto-Conclusao">A obra de Makoto Yukimura propõe que a ausência de guerra não é mero pacifismo ingênuo, mas a mais dura e exuberante das disciplinas. Ser um verdadeiro guerreiro significa assumir sobre os próprios ombros as chagas de um mundo violento, recusando-se peremptoriamente a transferir essa dor a outro ser vivo.</p>
                        <Link to="/batalhas" className="botao-Explorar">
                            Explorar Arquivo de Batalhas <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}