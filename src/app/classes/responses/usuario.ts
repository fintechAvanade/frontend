import { Conta } from "./conta";
import { Endereco } from "./endereco";

export class Usuario {
    nome: string;
    nomeUsuario: string;
    cpf: string;
    dataNascimento: Date;
    email: string;
    telefone: string;
    endereco: Endereco;
    conta: Conta;


    constructor() {
        this.nome = '';
        this.cpf = '';
        this.dataNascimento = new Date();
        this.telefone = '';
        this.email = '';
        this.nomeUsuario = '';
        this.endereco = new Endereco();
        this.conta = new Conta();
    }
}
