import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ValorRequest } from '../../classes/requests/valor-request';


  @Component({
    selector: 'app-deposito',
    imports: [FormsModule, SaldoComponent],
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']  
  })
  export class DepositoComponent {
    valorInput: number = 0;
    valorSelecionado: number = 0;

    constructor(
      private router: Router,
      private movimentacoesService: MovimentacoesService,
      private JwtDecodeService: JwtDecodeService
    ) {}

    adicionarValor(valor: number): void {
      this.valorSelecionado = valor;
      this.valorInput += valor;
    }

    depositar(): void {
      const contaId = this.JwtDecodeService.getIdContaFromToken();

      if(contaId && (this.valorInput > 0 || this.valorSelecionado > 0)){
        const valorDeposito = this.valorInput > 0 ? this.valorInput : this.valorSelecionado;

        const request: ValorRequest = {
          valor: valorDeposito,
          descricao: 'Depósito em caixa eletrônico'
        };

        this.movimentacoesService.depositar(contaId, request).subscribe({
          next: (response) => {
            console.log('Depósito realizado:', response);
            alert('Depósito realizado com sucesso!');
            window.location.reload();
          },
          error: (error) => {
            console.error('Erro ao realizar depósito:', error);
            alert('Erro ao realizar depósito!');
          },
        });
      }else{
        alert('Por favor, insira um valor válido!');
      }
    }
  }