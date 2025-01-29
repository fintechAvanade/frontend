export class GestaoContas {
    constructor(
        public id: number = 0,
        public agencia: string = '',
        public numeroConta: string = '',
        public nome: string = '',
        public ultimaMovimentacao: string = '',
        public ultimoAcesso: string = '',
        public ativo: boolean = false
    ) {}

}
