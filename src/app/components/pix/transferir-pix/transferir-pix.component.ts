import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { JwtDecodeService } from '../../../services/jwtDecode.service';
import { MovimentacoesService } from '../../../services/movimentacoes.service';
import { PagarPix } from '../../../classes/requests/pagar-pix';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transferir-pix',
  imports: [FormsModule],
  templateUrl: './transferir-pix.component.html',
  styleUrls: ['./transferir-pix.component.css']
})
export class TransferirPixComponent {
  pagarPix: PagarPix = new PagarPix(); // Instância da classe pagarPix

  constructor(
    private dialogRef: MatDialogRef<TransferirPixComponent>,
    private jwtDecodeService: JwtDecodeService,
    private movimentacoesService: MovimentacoesService
  ) { }

  transferirPix(pagarpix: PagarPix): void {

    if (!this.pagarPix.chave || this.pagarPix.valor <= 0) {
      alert('Por favor, preencha a chave PIX e o valor corretamente.');
      return;
    }

    const contaId: any = this.jwtDecodeService.getIdContaFromToken();

    this.movimentacoesService.pagarPix(contaId, this.pagarPix).subscribe({
      next: (response) => {
        console.log('Transferência PIX realizada com sucesso:', response);
        alert('Transferência PIX realizada com sucesso!');
        this.fecharModal();
      },
      error: (error) => {
        console.error('Erro ao realizar a transferência PIX:', error);
        alert('Ocorreu um erro ao realizar a transferência PIX. Tente novamente.');
      }
    });
  }

  fecharModal(): void {
    this.dialogRef.close();
  }
}