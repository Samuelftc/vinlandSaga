import '../../styles/secoesHome/secaoArcos.css'

export interface Arco {
    id: number,
    capitulo: string,
    temporada: string,
    titulo: string,
    desc: string,
    href?: string
}

const arcos: Arco[] = [
    {
        id: 1,
        capitulo: "Capítulo 01 - 54",
        temporada: "Temporada 1",
        titulo: "Arco do Prólogo (Prologue)",
        desc: "Temporada 1 • 24 Episódios • A jornada inicial pelas batalhas de Wessex e Londres. A perda da inocência e a forja de um guerreiro cego pelo ódio.",
    },
    {
        id: 2,
        capitulo: "Capítulo 55 - 99",
        temporada: "Temporada 2",
        titulo: "Arco da Escravidão (Farmiland)",
        desc: "Temporada 2 • 24 Episódios • Renascimento espiritual e a busca pela redenção. A constatação dolorosa de que não se têm inimigos reais neste mundo.",
    },
    {
        id: 3,
        capitulo: "Capítulo 100 - 166",
        temporada: "Mangá Canon",
        titulo: "Expedição ao Leste (Eastern)",
        desc: "Manga Canon • Preparativos comerciais e diplomáticos via Grécia e Bizâncio para financiar a travessia atlântica definitiva rumo a Vinland.",
    }
]

export default function SecaoArcos() {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo">
                <h3>Arcos narrativos da saga</h3>
            </div>

            <ul className="listaDeArcos">
                {arcos.map((arco) => (
                    <li key={arco.id} className="liArco">
                        <div className="cabecalhoArco">
                            <p className='capitulosArco'>{arco.capitulo}</p>
                            <p>{arco.temporada}</p>
                        </div>
                        <div className="corpoArco">
                            <h4>{arco.titulo}</h4>
                            <p>{arco.desc}</p>
                        </div>

                        <a href="#">Ver detalhes do arco</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}