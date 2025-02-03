import { Component } from '@angular/core';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { FormsModule } from '@angular/forms';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { pagarBoleto } from '../../classes/requests/pagar-boleto';
import { SaldoComponent } from '../../shared/saldo/saldo.component';

@Component({
  selector: 'app-pagamento-boleto',
  imports: [FormsModule, SaldoComponent],
  templateUrl: './pagamento-boletos.component.html',
  styleUrls: ['./pagamento-boletos.component.css']
})
export class PagamentoBoletoComponent {
  pagamento: pagarBoleto = new pagarBoleto();
  codigoBoleto: string = '';
  valorBoleto: number = 0;
  descricaoBoleto: string = ''; 
  tipoMovimentacao: string = 'PAGAMENTO_BOLETO'

  constructor(
    private movimentacoesService: MovimentacoesService,
    private jwtDecodedService: JwtDecodeService
  ) { }

  confirmarPagamento(): void {
    if (!this.codigoBoleto || this.valorBoleto <= 0) {
      alert('Por favor, preencha o código de barras e o valor corretamente.');
      return;
    }

    this.pagamento.codigo = this.codigoBoleto;
    this.pagamento.valor = this.valorBoleto;
    this.pagamento.descricao = this.descricaoBoleto;
    const contaId: any = this.jwtDecodedService.getIdContaFromToken();

    this.movimentacoesService.pagarBoleto(contaId, this.pagamento).subscribe({
      next: (response) => {
        console.log('Pagamento realizado com sucesso:', response);
        alert('Pagamento realizado com sucesso!');
        this.limparFormulario();
      },
      error: (error) => {
        console.error('Erro ao realizar o pagamento:', error);
        alert('Ocorreu um erro ao realizar o pagamento. Tente novamente.');
      }
    });
  }

  limparFormulario(): void {
    this.codigoBoleto = '';
    this.valorBoleto = 0;
    this.descricaoBoleto = '';
    this.pagamento = new pagarBoleto();
  }
}