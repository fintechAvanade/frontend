import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoComponent } from '../../shared/saldo/saldo.component';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ValorRequest } from '../../classes/requests/valor-request';

@Component({
  selector: 'app-saque',
  imports: [FormsModule, SaldoComponent],
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {
  valorInput: number = 0;
  valorSelecionado: number = 0;


  constructor(
    private router: Router,
    private movimentacaoService: MovimentacoesService,
    private jwtDecodedService: JwtDecodeService

  ) { }

  adicionarValor(valor: number): void {
    this.valorSelecionado - valor;
    this.valorInput += valor;
  }

  sacar(): void {
    const contaId = this.jwtDecodedService.getIdContaFromToken();

    if (contaId && (this.valorInput > 0 || this.valorSelecionado > 0)) {
      const valorSaque = this.valorInput > 0 ? this.valorInput : this.valorSelecionado;

      const request: ValorRequest = {
        valor: valorSaque,
        descricao: 'Saque em caixa eletrônico'
      };

      this.movimentacaoService.sacar(contaId, request).subscribe({
        next: (response) => {
          console.log('Saque realizado:', response);
          alert('Saque realizado com sucesso!');
          window.location.reload();
        },
        error: (error) => {
          console.error('Erro ao realizar saque:', error);
          alert('Erro ao realizar saque!');
        },
      });
    } else {
      alert('Por favor, insira um valor válido!');
    }
  }
}