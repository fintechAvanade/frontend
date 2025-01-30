import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { CommonModule } from '@angular/common';

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
  }
  calcularTotais(movimentacoes: any[]): void {
    this.entradasMes = movimentacoes
    .filter((mov) => mov.tipo === 'DEBITO')
    .reduce((total, mov) => total + mov.valor, 0);

    this.saidasMes = movimentacoes
    .filter((mov) => mov.tipo === 'CREDITO')
    .reduce((total, mov) => total + mov.valor, 0);

  }


}
