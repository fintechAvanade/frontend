import { TipoUsuario } from "../enum/tipoUsuario";
import { Conta } from "./conta";
import { Endereco } from "./endereco";

export class Usuario {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;  // Utilizando string, pois a data será manipulada como string (por exemplo, "2025-01-01")
    email: string;
    telefone: string;
    nomeUsuario: string;
    hashSenha: string;
    dataUltimoAcesso: string;  // Mesmo para a data de último acesso
    tipoUsuario: TipoUsuario;
    numerosTentativasAcesso: number;
    ativo: boolean;
    endereco: Endereco;
    contas: Conta[];
  
    constructor(
      id: number,
      nome: string,
      cpf: string,
      dataNascimento: string,
      email: string,
      telefone: string,
      nomeUsuario: string,
      hashSenha: string,
      dataUltimoAcesso: string,
      tipoUsuario: TipoUsuario,
      numerosTentativasAcesso: number,
      ativo: boolean,
      endereco: Endereco,
      contas: Conta[]
    ) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.email = email;
      this.telefone = telefone;
      this.nomeUsuario = nomeUsuario;
      this.hashSenha = hashSenha;
      this.dataUltimoAcesso = dataUltimoAcesso;
      this.tipoUsuario = tipoUsuario;
      this.numerosTentativasAcesso = numerosTentativasAcesso;
      this.ativo = ativo;
      this.endereco = endereco;
      this.contas = contas;
    }
  }