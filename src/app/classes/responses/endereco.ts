export class Endereco {
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: number;
    complemento?: string;

    constructor() {
        this.cep = '';
        this.cidade = '';
        this.bairro = '';
        this.logradouro = '';
        this.estado = '';
        this.numero = 0;
    }
}