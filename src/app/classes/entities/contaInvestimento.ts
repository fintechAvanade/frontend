import { Conta } from './conta';
import { Investimento } from './investimento';

export class ContaInvestimento {
  id: number;
  conta: Conta;
  investimento: Investimento;
  valorAplicado: number;

  constructor(
    id: number,
    conta: Conta,
    investimento: Investimento,
    valorAplicado: number
  ) {
    this.id = id;
    this.conta = conta;
    this.investimento = investimento;
    this.valorAplicado = valorAplicado;
  }
}
