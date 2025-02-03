export class pagarBoleto {
    codigo: string
    valor: number
    descricao: string
    tipoMovimentacao: string
    constructor(
    ) {
        this.codigo = ''
        this.valor = 0
        this.descricao = ''
        this.tipoMovimentacao = 'PAGAMENTO_BOLETO'
    }
}