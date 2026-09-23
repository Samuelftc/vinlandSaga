export interface Personagem {
    id: number,
    image: string,
    nome: string
    descMinima: string,
    descCompleta?: string,
    temporadas?: string,
    origem?: string,
    afiliacao?: string,
    status?: string
}