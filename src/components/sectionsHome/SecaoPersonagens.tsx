import type { Personagem } from "../../types/Personagem";
import { ArrowRight } from "lucide-react";

import '../../styles/secoesHome/secaoPersonagens.css'

interface SecaoPersonagensProps {
    personagens: Personagem[];
}

export default function SecaoPersonagens({ personagens }: SecaoPersonagensProps) {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo">
                <h3>Personagens em destaque</h3>
                <a href="#">Ver todos personagens <ArrowRight /></a>
            </div>

            <ul className="listaDePersonagens">
                {personagens.map((personagem) => (
                    <li className="liPersonagem" key={personagem.id}>
                        <img src={personagem.image} alt={personagem.nome} />
                        <div className="informacoesPersonagem">
                            <div className="informacoesSuperioresPersonagem">
                                <h4>{personagem.nome}</h4>
                                <p>{personagem.descMinima}</p>
                            </div>

                            <div className="informacoesInferioresPersonagem">
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