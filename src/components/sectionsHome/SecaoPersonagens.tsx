import type { Personagem } from "../../types/Personagem";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import '../../styles/secoesHome/secaoPersonagens.css'

interface SecaoPersonagensProps {
    personagens: Personagem[];
}

export default function SecaoPersonagens({ personagens }: SecaoPersonagensProps) {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo">
                <h3>Personagens em destaque</h3>
                <Link to="/personagens">Ver todos personagens <ArrowRight /></Link>
            </div>

            <ul className="listaDePersonagensHome">
                {personagens.slice(0, 4).map((personagem) => (
                    <li className="liPersonagemHome" key={personagem.id}>
                        <img src={personagem.image} alt={personagem.nome} />
                        <div className="informacoesPersonagemHome">
                            <div className="informacoesSuperioresPersonagemHome">
                                <h4>{personagem.nome}</h4>
                                <p>{personagem.descMinima}</p>
                            </div>

                            <div className="informacoesInferioresPersonagemHome">
                                <span>{personagem.temporadas}</span>
                                <p>{personagem.origem}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}