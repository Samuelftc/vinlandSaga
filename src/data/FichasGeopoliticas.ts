export interface FichaGeopolitica {
    id: number;
    faccao: string;
    descricaoEstado: string;
    territorioBadge?: string;
    territoriNuclear: string;
    doutrinas: string;
    forcaMilitar: string;
    liderancaCanonica: string;
    relacaoVinland: string;
    statusRelacao?: string;
}

export const fichasGeopoliticas: FichaGeopolitica[] = [
    {
        id: 1,
        faccao: "Império do Mar do Norte",
        descricaoEstado: "Dinamarca, Noruega & Inglaterra",
        territoriNuclear: "Jutlândia, Zelândia e Londres",
        doutrinas: "Monarquia imperial centralizada apoiada por huscaris de elite e cobrança de Danegeld.",
        forcaMilitar: "Monarquia imperial centralizada apoiada por huscaris de elite e cobrança de Danegeld.",
        liderancaCanonica: "Rei Canute (Knut)",
        relacaoVinland: "Ignorado (Foco Europeu)",
        statusRelacao: "ignorado"
    },
    {
        id: 2,
        faccao: "Reino da Inglaterra Saxônica",
        descricaoEstado: "Wessex, Mércia e Mércia Ocidental",
        territoriNuclear: "Winchester, Castelos do Sul Saxão",
        doutrinas: "Milícia camponesa Fyrd reforçada por nobres Thegns; táticas defensivas de muralha de escudos.",
        forcaMilitar: "Milícia camponesa Fyrd reforçada por nobres Thegns; táticas defensivas de muralha de escudos.",
        liderancaCanonica: "Rei Æthelred / Edmund Ironside",
        relacaoVinland: "Nula (Resistência Local)",
        statusRelacao: "nula"
    },
    {
        id: 3,
        faccao: "Fraternidade Jomsviking",
        descricaoEstado: "Fortaleza Báltica de Jomsborg",
        territoriNuclear: "Costa sul do Mar Báltico (Wolin)",
        doutrinas: "Mercenários fanáticos com código militar espartano. Treinamento ininterrupto para a morte gloriosa.",
        forcaMilitar: "Mercenários fanáticos com código militar espartano. Treinamento ininterrupto para a morte gloriosa.",
        liderancaCanonica: "Sigvaldi / Thorkell / Vagn",
        relacaoVinland: "Antagônica (Guerra Perpétua)",
        statusRelacao: "antagonica"
    },
    {
        id: 4,
        faccao: "Povos Nativos Lnu (Mi'kmaq)",
        descricaoEstado: "Terras de Vinland e Markland",
        territoriNuclear: "Golfo de St. Lawrence, Ilhas do Oeste",
        doutrinas: "Caçadores-coletores navais e terrestres. Arcos ágeis, canoas de casca e profundo conhecimento da terra.",
        forcaMilitar: "Caçadores-coletores navais e terrestres. Arcos ágeis, canoas de casca e profundo conhecimento da terra.",
        liderancaCanonica: "Kíll Anclãos & Xamã M (Canônico)",
        relacaoVinland: "Anfitriões / Contato Crítico",
        statusRelacao: "anfitrioes"
    }
];
