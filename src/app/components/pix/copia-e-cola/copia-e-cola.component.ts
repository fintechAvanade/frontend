import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MovimentacoesService } from '../../../services/movimentacoes.service';
import { JwtDecodeService } from '../../../services/jwtDecode.service';
import { PagarPix } from '../../../classes/requests/pagar-pix';
import { FormsModule } from '@angular/forms';
import { PagarComCodigo } from '../../../classes/requests/pagar-com-codigo';

@Component({
  selector: 'app-copia-e-cola',
  imports: [FormsModule],
  templateUrl: './copia-e-cola.component.html',
  styleUrl: './copia-e-cola.component.css'
})
export class CopiaEColaComponent {
  pagamento: PagarComCodigo = new PagarComCodigo();
  codigoPix: string = '';
  valorPix: number = 0;
  descricaoPix: string = '';
  tipoMovimentacao: string = 'PIX_COPIA_COLA'

  constructor(
    private dialogRef: MatDialogRef<CopiaEColaComponent>,
    private movimentacoesService: MovimentacoesService,
    private jwtDecodedService: JwtDecodeService
  ) { }

  fecharModal(): void {
    this.dialogRef.close();
  }

  confirmarPagamento(): void {
    if (!this.codigoPix || this.valorPix <= 0) {
      alert('Por favor, preencha o código de barras e o valor corretamente.');
      return;
    }

    this.pagamento.codigo = this.codigoPix;
    this.pagamento.valor = this.valorPix;
    this.pagamento.descricao = this.descricaoPix;
    this.pagamento.tipoMovimentacao = this.tipoMovimentacao;
    const contaId: any = this.jwtDecodedService.getIdContaFromToken();

    console.log(this.pagamento);

    this.movimentacoesService.pagarComCodigo(contaId, this.pagamento).subscribe({
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
    this.codigoPix = '';
    this.valorPix = 0;
    this.descricaoPix = '';
    this.pagamento = new PagarComCodigo();
  }
}
