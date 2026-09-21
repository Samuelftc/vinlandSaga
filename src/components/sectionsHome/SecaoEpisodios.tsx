import '../../styles/secoesHome/secaoEpisodios.css'

export interface Ep {
    id: number,
    badge: string,
    titulo: string,
    arco: string,
    duracao: string,
    desc: string,
}

const episodios: Ep[] = [
    {
        id: 1,
        badge: "Ep 01",
        titulo: "O Ponto de partida",
        arco: "Prólogo",
        duracao: "24m",
        desc: "Na Islândia do século XI, o jovem Thorfinn sonha com a mítica Vinland enquanto seu pai, o lendário guerreiro Thors, é chamado de volta ao combate pelas forças Jomsvikings."
    },
    {
        id: 2,
        badge: "Ep 02",
        titulo: "O Guerreiro",
        arco: "Prólogo",
        duracao: "24m",
        desc: "Thors enfrenta os Jomsvikings em uma batalha épica, mas é traído durante o combate, alterando o curso da vida de Thorfinn para sempre."
    },
    {
        id: 24,
        badge: "Ep 24",
        titulo: "O fim do prólogo",
        arco: "Prólogo",
        duracao: "24m",
        desc: "O clímax sangrento em York onde o destino do Império do Mar do Norte e o voto de vingança de Thorfinn colidem irreversivelmente sob o sacrifício supremo de Askeladd."
    }
]

export default function SecaoEpisodios() {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo">
                <h3>Episódios legais</h3>
            </div>

            <ul className="listaTemporadas">
                <li className='active'>Temporada 1: Prólogo (Prologue arc)</li>
                <li>Temporada 2: Escravidão (Farmiland arc)</li>
            </ul>

            <ul className="listaDeEpisodios">
                {episodios.map((ep) => (
                    <li key={ep.id} className='episodioHome'>
                        <p className='badgeEp'>{ep.badge}</p>
                        <div className='informacoesEp'>
                            <div>
                                <h4>{ep.titulo}</h4>
                                <p>Arco: {ep.arco}</p>
                                <p>Duração: {ep.duracao}</p>
                            </div>
                            <p>{ep.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}