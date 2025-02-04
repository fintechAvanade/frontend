export class EditarUsuario{
    idConta: number;
    idUser: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    nomeUsuario: string;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: number | null;
    complemento?: string;
    ativo: boolean;
    tipoConta: string;
    
    constructor(){
        this.idConta = 0;
        this.idUser = 0;
        this.nome = '';
        this.cpf= '';
        this.dataNascimento = ''
        this.telefone = '';
        this.email = '';
        this.nomeUsuario = '';
        this.cep = '';
        this.cidade = '';
        this.bairro = '';
        this.logradouro = '';
        this.estado = '';
        this.numero = null;
        this.ativo = false;
        this.tipoConta = '';
    }
}