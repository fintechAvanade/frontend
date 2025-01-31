import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { CommonModule } from '@angular/common';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-extrato',
  imports: [CommonModule],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css'
})
export class ExtratoComponent implements OnInit {
  movimentacoes: any[] = [];
  saldoAtual: number = 0;
  entradasMes: number = 0;
  saidasMes: number = 0;

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
          this.movimentacoes = response;
        }
      });
    } else {
      console.log('Erro ao recuperar movimentações');
    }
    if(contaId) {
      this.contaService.getSaldo(contaId).subscribe({
        next: (response) => {
          this.saldoAtual = response.valor;
        }
      });
    }else{
      console.log('Erro ao recuperar saldo da conta');
    }
  }
}
