import { Flower2, Crown } from 'lucide-react';
import '../../styles/secoesHome/secaoIdeologias.css'

export default function SecaoIdeologias() {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo2">
                <h3>Duelo de ideologias</h3>
                <p>Dois caminhos opostos para redimir um mundo afundado em sangue e tirania</p>
            </div>

            <ul className="ulIdeologias">
                <li className='liIdeologia'>
                    <div className='cabecalhoIdeologia'>
                        <p>O pacificador - O caminho de Vinland</p>
                        <Flower2 className='iconeIdeologia' color="#ef4444" size={24}/>
                    </div>
                    <div className='divNome'>
                        <h4>Thorfinn</h4>
                        <p>"Não tenho inimigos. Ninguém tem inimigos."</p>
                    </div>
                    <div className='divInformacoes'>
                        <div>
                            <p className='visaoEMetodo' style={{ color: "#FFF" }}>Visão:</p>
                            <p>Rejeição total às armas e ao ciclo infindável de vingança; a convicção de que um verdadeiro
                                guerreiro transcende a violência construindo uma sociedade livre de escravos, tirania e
                                opressão para além do oceano ocidental.</p>
                        </div>
                        <div>
                            <p className='visaoEMetodo' style={{ color: "#FFF" }}>Métodos:</p>
                            <p>Diplomacia desarmada, expiação pelo suor do trabalho na terra, resistência pacífica perante
                                insultos e o juramento solene feito perante a memória de Thors e os sonhos de Einar.</p>
                        </div>
                    </div>
                    <div className='rodapeIdeologia'>
                        <p className='rodapeTextoEsquerda'>Caminho: Êxodo & Não-Violência</p>
                        <p className='rodapeTextoDireita'>Sem exércitos</p>
                    </div>
                </li>

                <li className='liIdeologia'>
                    <div className='cabecalhoIdeologia'>
                        <p className='cabecalhoBadge'>O conquistador - O paraíso terrestre</p>
                        <Crown className='iconeIdeologia' color="#ef4444" size={24}/>
                    </div>
                    <div className='divNome'>
                        <h4>Canuto</h4>
                        <p>"Se Deus não nos dá um paraíso, eu mesmo o erguerei com ferro e sangue."</p>
                    </div>
                    <div className='divInformacoes'>
                        <div>
                            <p className='visaoEMetodo' style={{ color: "#FFF" }}>Visão:</p>
                            <p>Unificação imperial de dinamarqueses e saxões sob uma coroa inflexível; o sacrifício moral
                                individual e a danação da própria alma em nome da ordem absoluta, desafiando a providência
                                divina.</p>
                        </div>
                        <div>
                            <p className='visaoEMetodo' style={{ color: "#FFF" }}>Métodos:</p>
                            <p>Maquiavelismo político de alta corte, comando militar avassalador, purga impiedosa de nobres
                                conspiradores e a pesada coroa manchada de sangue herdada de Sweyn.</p>
                        </div>
                    </div>
                    <div className='rodapeIdeologia'>
                        <p className='rodapeTextoEsquerda'>Caminho: Império & Soberania</p>
                        <p className='rodapeTextoDireita'>pax danica</p>
                    </div>
                </li>

            </ul>

            <div className='divResumoIdeologia'>
                <p className='textoEsquerda'><strong>Confronto Ideológico Central:</strong> O encontro épico na Fazenda de Ketil (Temporada 2, Episódios 23 & 24) estabelece a trégua e sela as duas visões definitivas para a salvação da humanidade nórdica.</p>
                <p style={{color: "#FF3344", textTransform: "uppercase", fontSize: "14px"}}>Episódios 23-24 (S2)</p>
            </div>
        </section>
    );
}