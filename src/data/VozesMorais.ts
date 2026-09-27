export interface VozMoral {
    id: number,
    citacao: string,
    personagem: string,
    contexto: string
}

export const vozesMorais: VozMoral[] = [
    {
        id: 1,
        citacao: "Eu preciso de muito mais força para não lutar do que para erguer uma espada...",
        personagem: "Thorfinn Karlsefni",
        contexto: "Diálogo com Canute em Ketil Farm"
    },
    {
        id: 2,
        citacao: "Todos nós somos escravos de algo: ouro, vingança, mulheres ou Deus. Até mesmo o homem mais livre obedece ao seu próprio apetite.",
        personagem: "Lucius Artorius Castus (Askeladd)",
        contexto: "Reflexão existencial na invernada saxã"
    },
    {
        id: 3,
        citacao: "A terra fértil não nasce das lâminas de ferro, mas do suor daqueles que aprenderam a cultivar sem medo.",
        personagem: "Einar, O Agricultor",
        contexto: "Durante o desbravamento das florestas"
    }
];
