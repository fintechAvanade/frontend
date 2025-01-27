import { Conta } from './conta';  // Importando a classe Conta

export class Cartao {
  id: number;  // ID do cartão
  conta: Conta;  // Relacionamento com a classe Conta
  numeroCartao: string;  // Número do cartão
  cvv: string;  // Código de segurança do cartão (CVV)
  dataValidadeCartao: string;  // Data de validade do cartão no formato ISO string
  ativo: boolean;  

  constructor(
    id: number,
    conta: Conta,
    numeroCartao: string,
    cvv: string,
    dataValidadeCartao: string,
    ativo: boolean
  ) {
    this.id = id;
    this.conta = conta;
    this.numeroCartao = numeroCartao;
    this.cvv = cvv;
    this.dataValidadeCartao = dataValidadeCartao;
    this.ativo = ativo;
  }
}
