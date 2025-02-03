export class PagarPix {
    chave: string
    valor: number
    descricao: string
    tipoMovimentacao: string
    constructor(
    ) {
        this.chave = ''
        this.valor = 0
        this.descricao = ''
        this.tipoMovimentacao = 'PIX'
    }
}