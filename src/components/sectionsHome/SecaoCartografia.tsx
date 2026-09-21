import { Compass, Castle, Tractor, Ship, Flag } from 'lucide-react';
import '../../styles/secoesHome/secaoCartografia.css'

export interface Lugar {
    id: number,
    apelido: string,
    icon: React.ReactNode,
    titulo: string,
    desc: string,
    localidade: string,
    temporada: string,
}

const lugares: Lugar[] = [
    {
        id: 1,
        apelido: "O berço dos livres",
        icon: <Compass size={22} color='#94A3B8' />,
        titulo: "Islândia",
        desc: "Ponto de partida do refúgio de Thors e da infância inocente de Thorfinn. Terras áridas do Atlântico Norte colonizadas por clãs livres que fugiram da tirania monárquica de Harald Cabelo Belo.",
        localidade: "Coordenadas: 64°N / 18°W",
        temporada: "Origem",
    },
    {
        id: 2,
        apelido: "Coração da conquista saxônica",
        icon: <Castle size={22} color='#94A3B8' />,
        titulo: "York / Jórvík & Rio Humber",
        desc: "Bastião dinamarquês no Danelaw e centro neurálgico das intrigas políticas de Sweyn Barba-Bifurcada e Floki. Palco dos combates sangrentos e do golpe triunfal e trágico do bando de Askeladd.",
        localidade: "Danelaw Saxônico",
        temporada: "Temporada 1",
    },
    {
        id: 3,
        apelido: "O vale da redenção",
        icon: <Tractor size={22} color='#94A3B8' />,
        titulo: "Jutlândia & Fazenda de Ketil",
        desc: "O vasto latifúndio agrícola na Dinamarca onde o trigo viceja sob o suor e o sangue de escravos. Palco do renascimento moral de Thorfinn, da dor de Arnheid e da batalha devastadora contra o exército de Canute.",
        localidade: "Reino da Dinamarca",
        temporada: "Temporada 2",
    },
    {
        id: 4,
        apelido: "A rota da seda nórdica",
        icon: <Ship size={22} color='#94A3B8' />,
        titulo: "Constantinopla / Miklagard",
        desc: "A lendária 'Grande Cidade' dos Varegues. Destino comercial através dos rios de Rus para negociar narvais e peles nobres a fim de obter o ouro necessário para financiar a colonização além-mar.",
        localidade: "Império Bizantino",
        temporada: "Arco do Leste",
    },
    {
        id: 5,
        apelido: "A terra prometida",
        icon: <Flag size={22} color='#FF3344' />,
        titulo: "Vinland (Terra Nova)",
        desc: "O território paradisíaco e indomado do Atlântico Oeste, livre da sombra das coroas feudais e dos senhores da guerra. Onde as uvas silvestres crescem selvagens e a coexistência harmônica entre os colonos nórdicos e os povos nativos Lnu é testada até o limite extremo.",
        localidade: "América do Norte Pré-Colombiana",
        temporada: "Destino Supremo",
    },
]

export default function SecaoCartografia() {
    return (
        <section className="sectionHome">
            <div className="divSecaoTitulo2">
                <h3>Cartografia Nórdica</h3>
                <p>As rotas de navegação marítima e os centros de poder militar e colonial do século XI</p>
            </div>

            <ul className="listaCartografias">
                {lugares.map((lugar) => (
                    <li className='cardCartografia' key={lugar.id}>
                        <div className='cabecalhoCardCartografia'>
                            <p className='apelidoCardCartografia'>{lugar.apelido}</p>
                            {lugar.icon}
                        </div>

                        <div className='corpoCardCartografia'>
                            <p className='tituloCardCartografia'>{lugar.titulo}</p>
                            <p className='descCardCartografia'>{lugar.desc}</p>
                        </div>

                        <div className='rodapeCardCartografia'>
                            <p className='localidadeCardCartografia'>{lugar.localidade}</p>
                            <p className='temporadaCardCartografia'>{lugar.temporada}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}