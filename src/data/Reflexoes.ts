export interface Reflexao {
    id: number,
    titulo: string,
    resumo: string,
    insight: string
}

export const reflexoes: Reflexao[] = [
    {
        id: 1,
        titulo: "O Vazio da Vingança vs O Pacto com Hild",
        resumo: "O desfecho sangrento em York revelou a falácia teleológica da vingança: após dez anos de subserviência homicida a Askeladd, a morte de seu algoz pelas mãos de Canute reduziu a existência de Thorfinn a um casulo oco. A raiva desprovida de alvo transformou-se em trauma puro e pesadelos perpétuos no submundo dos mortos que ele próprio enviou ao túmulo.",
        insight: "O encontro com Hild sela a inversão moral da saga: em vez de implorar perdão ou buscar o suicídio rodeador, Thorfinn aceita viver sob a mira constante da besta de caça de sua algoz. A expiação deixa de ser um ato catártico e se converte no trabalho cotidiano de semear campos, resgatar escravos e edificar um refúgio para os desvalidados — uma vida inteira dedicada a gerar mais vida de que aquela que foi extraída por suas ádagas."
    },
    {
        id: 2,
        titulo: "A Filosofia de Arnheid e a Crítica da Servidão",
        resumo: "A tragédia de Arnheid na fazenda de Ketil atua como o ponto de inflexão decisivo da narrativa. Seu martírio e subsequente morte desnudam a violência institucionalizada da sociedade escravocrata nórdica: a carne humana desprovida de agência, tratada como mera ferramenta de lavoura e objeto descartável de concupiscência aristocrática.",
        insight: "Arnheid parte sonhando com uma terra pacífica onde nem amos nem senhores de guerra alcancem suas florestas. É a memória de sua agonia que imuniza Thorfinn e Einar contra a resignação cínica, impulsionando a viagem marítima em direção a Vinland — não como conquista mercantil, mas como um santuário de libertação física e moral da servidão europeia"
    }
];
