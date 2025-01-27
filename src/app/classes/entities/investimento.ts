import { ContaInvestimento } from './contaInvestimento';

export class Investimento {
  id: number;
  nomeInvestimento: string;
  rendimentoDiario: number;
  resgateAntecipado: boolean;
  previsaoResgate: Date;
  contasInvestimentos: ContaInvestimento[];

  constructor(
    id: number,
    nomeInvestimento: string,
    rendimentoDiario: number,
    resgateAntecipado: boolean,
    previsaoResgate: Date,
    contasInvestimentos: ContaInvestimento[]
  ) {
    this.id = id;
    this.nomeInvestimento = nomeInvestimento;
    this.rendimentoDiario = rendimentoDiario;
    this.resgateAntecipado = resgateAntecipado;
    this.previsaoResgate = previsaoResgate;
    this.contasInvestimentos = contasInvestimentos;
  }
}
