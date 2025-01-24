export class Usuario {
    constructor(
        public nome: string = '',
        public nomeUsuario: string = '',
        public cpf: string = '',
        public dataNascimento: Date = new Date(),
        public email: string = '',
        public telefone: string = '',
    ) { }
}
