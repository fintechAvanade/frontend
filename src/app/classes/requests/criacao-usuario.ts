export class CriacaoUsuario {
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    nomeUsuario: string;
    senha: string;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: number;
    complemento?: string;
    
    constructor(){
        this.nome = '';
        this.cpf= '';
        this.dataNascimento = ''
        this.telefone = '';
        this.email = '';
        this.nomeUsuario = '';
        this.senha = '';
        this.cep = '';
        this.cidade = '';
        this.bairro = '';
        this.logradouro = '';
        this.estado = '';
        this.numero = 0;
    }
}
    


