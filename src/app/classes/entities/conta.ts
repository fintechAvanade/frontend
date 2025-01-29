import { Usuario } from "./usuario";
import { TipoConta } from "../enum/tipoConta"
import { Movimentacao } from "./movimentacao";
import { ContaInvestimento } from "./contaInvestimento";


export class Conta {
  id: number;
  agencia: number;
  numeroConta: number;
  saldo: number;
  hashSenhaPagamento: string;
  ativo: boolean;
  tipoConta: TipoConta;  
  usuario: Usuario;  
  movimentacoes: Movimentacao[];  
  contasInvestimentos: ContaInvestimento[]; 

  constructor(
    id: number,
    agencia: number,
    numeroConta: number,
    saldo: number,
    hashSenhaPagamento: string,
    ativo: boolean,
    tipoConta: TipoConta,
    usuario: Usuario,
    movimentacoes: Movimentacao[] = [],
    contasInvestimentos: ContaInvestimento[] = []
  ) {
    this.id = id;
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.hashSenhaPagamento = hashSenhaPagamento;
    this.ativo = ativo;
    this.tipoConta = tipoConta;
    this.usuario = usuario;
    this.movimentacoes = movimentacoes;
    this.contasInvestimentos = contasInvestimentos;
  }
}
