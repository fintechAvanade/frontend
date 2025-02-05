import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { CommonModule } from '@angular/common';
import { ContaService } from '../../services/conta.service';
import { FormsModule } from '@angular/forms';
import { ExtratoPipe } from '../../pipes/extrato.pipe';
import { TipoMovPipe } from '../../pipes/tipo-mov.pipe';

@Component({
  selector: 'app-extrato',
  imports: [CommonModule, FormsModule, ExtratoPipe, TipoMovPipe],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit {
  movimentacoesAll: any[] = [];
  movimentacoesEntradas: any[] = [];
  movimentacoesSaidas: any[] = [];
  saldoAtual: number = 0;
  entradasMes: number = 0;
  saidasMes: number = 0;
  mostraFiltro: boolean = false;
  dataFim: string = ''
  dataInicio: string = ''
  movimentacoesSelecionadas: any[] = []
  todasAtivo: boolean = true
  entradasAtivo: boolean = false
  saidasAtivo: boolean = false


  constructor(
    private JwtDecodeService: JwtDecodeService,
    private movimentacoesService: MovimentacoesService,
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    const contaId = this.JwtDecodeService.getIdContaFromToken();
    if (contaId) {
      this.movimentacoesService.getMovimentacoes(contaId).subscribe({
        next: (response) => {
          this.movimentacoesAll = response;
          this.movimentacoesSelecionadas = response;
        }
      });
    } else {
      console.log('Erro ao recuperar movimentações');
    }
    if (contaId) {    //Movimentacoes entradas ta invertido com movimentacoesSaidas pois o endpoint está passando invertido
      this.movimentacoesService.getMovimentacoesEntradas(contaId).subscribe({
        next: (response) => {
          this.movimentacoesSaidas = response;
        }
      });
    } else {
      console.log('Erro ao recuperar movimentações de entrada');
    }
    if (contaId) {
      this.movimentacoesService.getMovimentacoesSaidas(contaId).subscribe({
        next: (response) => {
          this.movimentacoesEntradas = response;
        }
      });
    } else {
      console.log('Erro ao recuperar movimentações de saidas');
    }
    if (contaId) {
      this.contaService.getSaldo(contaId).subscribe({
        next: (response) => {
          this.saldoAtual = response.valor;
        }
      });
    } else {
      console.log('Erro ao recuperar saldo da conta');
    }
    if (contaId) {
      this.contaService.getEntradas(contaId).subscribe({
        next: (response) => {
          this.entradasMes = response.valor;
        }
      });
    } else {
      console.log('Erro ao recuperar entradas do mês');
    }
    if (contaId) {
      this.contaService.getSaidas(contaId).subscribe({
        next: (response) => {
          this.saidasMes = response.valor;
        }
      });
    } else {
      console.log('Erro ao recuperar saídas do mês');
    }
  }

  mostrarFiltro(): void {
    this.mostraFiltro = !this.mostraFiltro;
    this.limparFiltro();
  }

  limparFiltro(): void {
    this.dataInicio = "";
    this.dataFim = "";
  }

  movimentacoesEntrada(){
    this.movimentacoesSelecionadas = this.movimentacoesEntradas
    this.entradasAtivo = true
    this.saidasAtivo = false
    this.todasAtivo = false
  }
  
  movimentacoesSaida(){
    this.movimentacoesSelecionadas = this.movimentacoesSaidas
    this.entradasAtivo = false
    this.saidasAtivo = true
    this.todasAtivo = false
  }
  
  movimentacoesTodas(){
    this.movimentacoesSelecionadas = this.movimentacoesAll
    this.entradasAtivo = false
    this.saidasAtivo = false
    this.todasAtivo = true
  }

}