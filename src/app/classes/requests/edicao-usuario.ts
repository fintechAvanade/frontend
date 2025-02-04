export class EdicaoUsuario{
    nome: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    nomeUsuario: string;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: number;
    tipoConta: string;
    complemento?: string;
    
    constructor(
        
    ){
        this.nome = '';
        this.dataNascimento = ''
        this.telefone = '';
        this.email = ''
        this.nomeUsuario = ''
        this.cep = ''
        this.cidade = ''
        this.bairro = ''
        this.logradouro = ''
        this.estado = ''
        this.numero = 0
        this.tipoConta = ''
        this.complemento = ''  }
}