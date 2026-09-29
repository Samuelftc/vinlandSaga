export interface VesselEspecificacao {
    id: number;
    tipo: string;
    categoria: string;
    icone: string;
    nomeVeiculo: string;
    nomeAlterno: string;
    descricao: string;
    especificacoes: {
        comprimento: string;
        propulsao?: string;
        capacidade?: string;
        velocidade?: string;
    };
    finalidadeCanonica: string;
    recursoEspecial: string;
    recursoValor: string;
    artefato?: string;
    navegacao?: string;
}

export const engenhariaNaval: VesselEspecificacao[] = [
    {
        id: 1,
        tipo: "NAVAL DE COMBATE",
        categoria: "naval-combate",
        icone: "⛵",
        nomeVeiculo: "DRAKKAR",
        nomeAlterno: "(LANGSKIP)",
        descricao: "Embarcação alongada, estreita e com calado extremamente raso. Projetada para incursões relámpago, subida rápida em rios os rasos (como o Tâmisa) e desembarque imediato de tropas nas praias sem necessidade de ancoradouros.",
        especificacoes: {
            comprimento: "25m a 37m",
            propulsao: "32-60 Remos + Vela Quadrada",
            velocidade: "10 a 14 nós"
        },
        finalidadeCanonica: "Ataques rápidos de Askeladd",
        recursoEspecial: "CASCO TRANÇADO EM CLINKER",
        recursoValor: "ALTA FLEXIBILIDADE"
    },
    {
        id: 2,
        tipo: "EXPEDIÇÃO & CARGA",
        categoria: "expedicao-carga",
        icone: "📦",
        nomeVeiculo: "KNARR",
        nomeAlterno: "(KNORR)",
        descricao: "Mais largo, profundo e resistente do que os navios de guerra. O pilar indispensável da travessia para a Islândia, Groenlândia e Vinland. Concebido para acomodar gado, provisões salgadas, ferramentas de forja e famílias pioneiras.",
        especificacoes: {
            comprimento: "16m a 20m (Boca Larga)",
            capacidade: "Até 24 toneladas",
            propulsao: "Vela Única de Lã Densa"
        },
        finalidadeCanonica: "Frota de Colonização de Thorfinn",
        recursoEspecial: "ALTO MAR RESILIENTE",
        recursoValor: "ESTABILIDADE POLAR"
    },
    {
        id: 3,
        tipo: "INSTRUMENTO ÓPTICO",
        categoria: "instrumento-optico",
        icone: "☀",
        nomeVeiculo: "PEDRA-DO-SOL",
        nomeAlterno: "(SÓLARSTEINN)",
        descricao: "Cristal de calcita translúcida (espato da Islândia) capaz de desplancar e refratador luz solar oculta por trás de grossos bancos de nevoeiro ártico ou tempestades de neve cerrada, revelando com precisão os graus do zênite.",
        especificacoes: {
            comprimento: "5-8cm de espessura"
        },
        finalidadeCanonica: "Descoberta de Leif Erikson em Vinland",
        recursoEspecial: "MECANISMO DE ORIENTAÇÃO",
        recursoValor: "Ao girar o cristal na linha dos olhos, a birrefringência produz dois pontos de luz com intensidades iguais apenas quando alinhado exatamente ao sol encoberto.",
        artefato: "ARTEFATO DE LEIF ERIKSON",
        navegacao: "NAVEGAÇÃO SOBERANA"
    }
];
