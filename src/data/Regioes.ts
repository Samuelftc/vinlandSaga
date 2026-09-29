export interface Regiao {
    id: number,
    nome: string,
    coordenadas: string,
    icone: string,
    descricao: string,
    climaticaDominante: string,
    importanciaTrama: string,
    figurasChave: string[],
    statusAcesso: string,
    notaAdicional?: string
}

export const regioes: Regiao[] = [
    {
        id: 1,
        nome: "Islândia",
        coordenadas: "66°08' N • 21°56' 0",
        icone: "※",
        descricao: "O Refúgio dos Livres: Isolamento glacial, pradarias gélidas e costas vulcânicas. O lar poético adorado por Thorfinn após desertar dos Jomsvikings e a terra natal onde Thorfinn cresceu ouvindo as crônicas do oceano ocidental contadas por Leif.",
        climaticaDominante: "Subpolar Oceânico / Tundra",
        importanciaTrama: "Prólogo & Partida para Vinland",
        figurasChave: ["Thors", "Helga", "Thorfinn jovem"],
        statusAcesso: "LIVRE"
    },
    {
        id: 2,
        nome: "Inglaterra & Jórvík",
        coordenadas: "53°57' N • 1°04' 0",
        icone: "☓",
        descricao: "Campos de Batalha Saxões: O Rio Humber, a ponte de Londres defendida por Thorkell e os castelos feudais de York. Palácio do sangrento combate entre o Rei Sweyn Barba-Bifurcada e o Reino Saxão, culminando na ascensão imperial inplacável de Canute.",
        climaticaDominante: "Temperado Úmido / Chuvas Constantes",
        importanciaTrama: "Arco da Guerra Saxônica",
        figurasChave: ["Canute", "Askeladd", "Thorkell", "Sweyn"],
        statusAcesso: "ZONA DE GUERRA",
        notaAdicional: "Danelaw sob controle real"
    },
    {
        id: 3,
        nome: "Jutlândia & Ketil",
        coordenadas: "55°42' N • 9°06' E",
        icone: "⊕",
        descricao: "Dinamarca Agrária & Servidão: Vastos campos de trigo dourado cercados por florestas de faias. O coração da escravidão dinamarquesa onde Thorfinn e Einar experimentaram a servidão, reaprenderam o valor da vida e testamentaram o ataque dos Thegns do Rei Canute.",
        climaticaDominante: "Continental Marítimo Fértil",
        importanciaTrama: "Arco da Fazenda (Redenção)",
        figurasChave: ["Thorfinn", "Einar", "Arnheid", "Ketil", "Snake"],
        statusAcesso: "CONFISCADO PELA COROA"
    },
    {
        id: 4,
        nome: "Ilhas Orkney",
        coordenadas: "59°08' N • 3°00' 0",
        icone: "⚓",
        descricao: "Covil Mercenário & Névoa: Arquipélago fustigado por vendavais e correntes impetuosas. Ponto de convergência das frotas vikings e base inimiga estratégica de Askeladd e seu poderio para orquestrar invasões costeiras e alianças com o nobre saxão Gratianus.",
        climaticaDominante: "Marítimo Ventoso / Névoa Densa",
        importanciaTrama: "Refúgio Operacional do Bando",
        figurasChave: ["Askeladd", "Bjorn", "Thorfinn"],
        statusAcesso: "CONTROLADO",
        notaAdicional: "Rotas de pilhagem ativas"
    },
    {
        id: 5,
        nome: "Miklagard",
        coordenadas: "41°00' N • 28°58' E",
        icone: "⚔",
        descricao: "A Grande Cidade Imperial: A metrópole dos imperadores bizantinos no Bósforo, ponto de chegada da exclusiva rota fluvial do Dnieper. O grande comércio mercantil do Velho Mundo onde a expedição de Thorfinn vendeu chifres de narval para financiar o projeto de Vinland.",
        climaticaDominante: "Mediterrâneo / Urbano Densely Fortificado",
        importanciaTrama: "Expedição do Mar do Leste",
        figurasChave: ["Thorfinn", "Hild", "Sigurd", "Guarda Varague"],
        statusAcesso: "ACESSO COMERCIAL",
        notaAdicional: "Rota comercial bizantina"
    },
    {
        id: 6,
        nome: "Vinland",
        coordenadas: "51°35' N • 55°11' 0",
        icone: "▲",
        descricao: "A Terra Prometida sem Espadas: Golfo de São Lourenço e as costas da Terra Nova. Uma extensão de pastos intocados, bosques fatos e uvas silvestres. O santuário vislumbrado por Thorfinn para erguer uma sociedade pacífica, longe do apetite destrutivo dos reis do Norte.",
        climaticaDominante: "Boreal Temperado com Invernos Rigorosos",
        importanciaTrama: "Clímax & Colonização Definitiva",
        figurasChave: ["Thorfinn", "Gudrid", "Kari", "Povo Lnu"],
        statusAcesso: "ASSENTAMENTO DE ARNHEID"
    }
];
