import { Usuario } from "./usuario";

export class Endereco {
    id: number;
    cep: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    estado: string;
    numero: number;
    complemento: string;
    usuarios: Usuario[];  // Relacionamento com a classe Usuario
  
    constructor(
      id: number,
      cep: string,
      cidade: string,
      bairro: string,
      logradouro: string,
      estado: string,
      numero: number,
      complemento: string,
      usuarios: Usuario[] = []  // Inicializando como um array vazio
    ) {
      this.id = id;
      this.cep = cep;
      this.cidade = cidade;
      this.bairro = bairro;
      this.logradouro = logradouro;
      this.estado = estado;
      this.numero = numero;
      this.complemento = complemento;
      this.usuarios = usuarios;
    }
  }
  