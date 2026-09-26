export interface Batalha {
    id: number,
    teatro: string, 
    titulo: string, 
    lugares: string,
    subtituloDefesa?: string,
    tituloDefesa?: string,
    textoDefesa?: string,
    subtituloAtaque?: string,
    tituloAtaque?: string,
    textoAtaque?: string,
    descBatalha?: string,
    tatica?: string,
    imagem?: string,
    questaoResumo1: string,
    respostaResumo1: string,
    questaoResumo2: string,
    respostaResumo2: string,
    questaoResumo3: string,
    respostaResumo3: string,
    questaoResumo4?: string
    respostaResumo4?: string
}