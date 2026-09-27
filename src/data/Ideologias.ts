export interface IdeologiaFundamental {
    id: number,
    titulo: string,
    subtitulo: string,
    resumo: string,
    frase: string,
    personagem: string,
    axioma: string,
    figuras: string[]
}

export const ideologias: IdeologiaFundamental[] = [
    {
        id: 1,
        titulo: "O caminho da lâmina & Valhalla",
        subtitulo: "A Moral Pagã dos Jomsvikings e Thorkell",
        resumo: "A honra medida estritamente em crânios partidos, a desonra terminal da morte no leito por velhice (morte de palha), e a busca incessante pelo júbilo extático do combate. A violência não é mera ferramenta política, mas a própria manifestação da divindade e da dignidade do guerreiro.",
        frase: "Lutar não é sobre ódio. É sobre o rugir do sangue e provar aos deuses que você está vivo!",
        personagem: "Thorkell, O Alto",
        axioma: "A força bruta é a única verdade indiscutível deste mundo.",
        figuras: ["Thorkell", "Bjorn", "Guerreiros Jomsvikings", "O Antigo Thorfinn"]
    },
    {
        id: 2,
        titulo: "O pragmatismo imperial",
        subtitulo: "O Evangelho Político de Canute",
        resumo: "O abandono consciente da fé divina diante do silêncio insuperador de Deus. Canute assume a responsabilidade de construir o paraíso na terra mediante a autoridade régia inabalável, exigindo prevenção, veneno e monopólio absoluto da violência legítima contra o caos nórdico.",
        frase: "Se Deus não nos conceder o paraíso, nós construiremos o nosso com nossas próprias mãos, nem que seja banhado em sangue.",
        personagem: "Rei Canute",
        axioma: "A coroa exige pecados imensuráveis para que a paz coletiva seja assegurada.",
        figuras: ["Rei Canute", "General Wulf", "Sweyn"]
    },
    {
        id: 3,
        titulo: "O Pacifismo Radical",
        subtitulo: "A Doutrina de Thors Snorresson & Thorfinn",
        resumo: "A transcendência absoluta da vingança e do ódio. A convicção inegociável de que nenhum ser humano nasce com inimigos naturais e que a verdadeira bravura reside em suportar a dor sem jamais revidar, rompendo drasticamente o ciclo biológico de retaliação mútua.",
        frase: "Você não tem inimigos. Ninguém tem inimigos. Nem ninguém nem coisa nenhuma que você tenha razão para machucar.",
        personagem: "Thors Snorresson",
        axioma: "O verdadeiro guerreiro não necessita de lâmina de ferro.",
        figuras: ["Thors", "Thorfinn", "Einar", "Arnheid", "Leif Erikson"]
    }
];
