export interface Tese {
    id: number,
    titulo: string,
    descricao: string,
    eixo: string,
    capitulo: string | number
}

export const teses: Tese[] = [
    {
        id: 1,
        titulo: "O Que é o Amor? O Enigma do Padre Willibald",
        descricao: "Willibald propôs uma distinção aterradora entre afeição egoísta e o amor verdadeiro: a afeição que um pai tem por seu filho ou um líder por seu guerreiro é discriminação, pois exclui o restante do cosmos. Na concepção do clérigo, apenas a morte iguala a todos sob a neve, transformando o cadáver em doação biológica sem cobyça. O dilema de Canute nasce desta revelação: na ausência de um amor divino vivo, o homem deve criar a ordem universal pelo ferro.",
        eixo: "Amor discriminatório vs amor universal",
        capitulo: 38
    },
    {
        id: 2,
        titulo: "A Corrupção da Coroa & O Espectro de Sweyn",
        descricao: "A soberania política em Vinland Saga é retratada como uma simbiose parasitária: a coroa imperial não é controlada pelo governante; pelo contrário, é a coroa que escraviza quem a porta. O espectro decapitado de Sweyn zomba constantemente de Canute, alertando-o de que a monarquia é condenada a alimentar incessantemente a besta da guerra com modas, sangue e conspirações para que o tecido do reino não se desintegre.",
        eixo: "A patologia do poder estatal",
        capitulo: 75
    },
    {
        id: 3,
        titulo: "A Ilusão da Honra Mercenária & Askeladd",
        descricao: "A figura trágica e cínica de Askeladd atua como o cirurgião que disseca o mito do orgulho guerreiro dos invasores dinamarqueses. Portador do sangue nobre do Rei Arthur e da agonia das celtas de Gales, ele expõe os vikings como bandoleiros incivilizados obcecados por ouro e espólios. À sua renúncia final — decapitar o Rei Sweyn e sacrificar a própria vida para preservar Canute e Gales — representa o ápice da astúcia moral sobre a força bruta.",
        eixo: "Desmistificação da glória bélica",
        capitulo: 54
    },
    {
        id: 4,
        titulo: "A Fronteira de Vinland: O Dilema da Coexistência",
        descricao: "A grande prova de fogo do pacifismo de Thorfinn Karlsefni ocorre no contato com os povos nativos Lnu do continente americano. A proibição categórica de carregar espadas de ferro colide com o medo ancestral dos colonos nórdicos diante do desconhecido e a tentação irresistível das armas de caça virarem instrumentos de massacre. Estabelecer paz sem coerção revela-se infinitamente mais complexo do que simplesmente vencer um duelo.",
        eixo: "O encontro civilizacional e o medo",
        capitulo: "180+"
    }
];
