import { useState } from 'react';
import '../../styles/secoesHome/secaoEpisodios.css'

export interface Ep {
    id: number,
    badge: string,
    titulo: string,
    arco: string,
    duracao: string,
    desc: string,
    temporada: number,
}

const episodios: Ep[] = [
    {
        id: 1,
        badge: "Ep 01",
        titulo: "O Ponto de partida",
        arco: "Prólogo",
        duracao: "24m",
        desc: "Na Islândia do século XI, o jovem Thorfinn sonha com a mítica Vinland enquanto seu pai, o lendário guerreiro Thors, é chamado de volta ao combate pelas forças Jomsvikings.",
        temporada: 1
    },
    {
        id: 2,
        badge: "Ep 02",
        titulo: "Espada",
        arco: "Prólogo",
        duracao: "24m",
        desc: "Thors enfrenta os Jomsvikings em uma batalha épica, mas é traído durante o combate, alterando o curso da vida de Thorfinn para sempre.",
        temporada: 1
    },
    {
        id: 24,
        badge: "Ep 24",
        titulo: "O fim do prólogo",
        arco: "Prólogo",
        duracao: "24m",
        desc: "O clímax sangrento em York onde o destino do Império do Mar do Norte e o voto de vingança de Thorfinn colidem irreversivelmente sob o sacrifício supremo de Askeladd.",
        temporada: 1
    },
    {
        id: 25,
        badge: "Ep 25",
        titulo: "Escravo",
        arco: "Farmiland",
        duracao: "24m",
        desc: "Thorfinn, agora um homem quebrado, é vendido como escravo para a fazenda de Ketil. Começam os primeiros passos de sua jornada rumo à redenção.",
        temporada: 2
    },
    {
        id: 26,
        badge: "Ep 26",
        titulo: "A fazenda de Ketil",
        arco: "Farmiland",
        duracao: "24m",
        desc: "Na lida diária da fazenda, Thorfinn encontra em Einar um companheiro de sofrimento e, talvez, um caminho para a paz.",
        temporada: 2
    },
    {
        id: 48,
        badge: "Ep 48",
        titulo: "Terra natal",
        arco: "Farmiland",
        duracao: "24m",
        desc: "O confronto final entre Thorfinn e Canuto revela que o verdadeiro guerreiro não é quem empunha a espada, mas quem abraça a paz.",
        temporada: 2
    }
]

export default function SecaoEpisodios() {
    const [temporadaAtiva, setTemporadaAtiva] = useState<number>(1);

    const episodiosFiltrados = episodios.filter((ep) => ep.temporada === temporadaAtiva);

    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo">
                <h3>Episódios legais</h3>
            </div>

            <ul className={`listaTemporadas temporada-${temporadaAtiva}`}>
                <li
                    className={temporadaAtiva === 1 ? 'active' : ''}
                    onClick={() => setTemporadaAtiva(1)}
                    style={{ cursor: 'pointer' }}
                >
                    <span>Temporada 1: Prólogo (Prologue arc)</span>
                </li>
                <li
                    className={temporadaAtiva === 2 ? 'active' : ''}
                    onClick={() => setTemporadaAtiva(2)}
                    style={{ cursor: 'pointer' }}
                >
                    <span>Temporada 2: Escravidão (Farmiland arc)</span>
                </li>
            </ul>

            <ul className="listaDeEpisodios">
                {episodiosFiltrados.map((ep) => (
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