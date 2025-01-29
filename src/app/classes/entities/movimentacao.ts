import { Direcao } from "../enum/direcao";
import { StatusMovimentacao } from "../enum/statusMovimentacao";
import { TipoMovimentacao } from "../enum/tipoMovimentacao";
import { Conta } from "./conta";

export class Movimentacao {
  id: number;
  codigoMovimentacao: string;
  status: StatusMovimentacao;
  conta: Conta;  
  tipoMovimentacao: TipoMovimentacao;  
  direcao: Direcao;
  dataMovimentacao: string;
  descricao: string;
  valorMovimentacao: number;
  percentualTaxa: number;
  valorTotalMovimentacao: number;

  constructor(
    id: number,
    codigoMovimentacao: string,
    status: StatusMovimentacao,
    conta: Conta,
    tipoMovimentacao: TipoMovimentacao,
    direcao: Direcao,
    dataMovimentacao: string,
    descricao: string,
    valorMovimentacao: number,
    valorTotalMovimentacao: number,
    percentualTaxa: number
  ) {
    this.id = id;
    this.codigoMovimentacao = codigoMovimentacao;
    this.status = status;
    this.conta = conta;
    this.tipoMovimentacao = tipoMovimentacao;
    this.direcao = direcao;
    this.dataMovimentacao = dataMovimentacao;
    this.descricao = descricao;
    this.valorMovimentacao = valorMovimentacao;
    this.percentualTaxa = percentualTaxa;
    this.valorTotalMovimentacao = valorTotalMovimentacao;
  }
}
