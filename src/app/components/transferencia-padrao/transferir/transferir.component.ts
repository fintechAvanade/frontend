import { Component, Inject } from '@angular/core';
import { Transferencia } from '../../../classes/requests/transferencia';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JwtDecodeService } from '../../../services/jwtDecode.service';
import { MovimentacoesService } from '../../../services/movimentacoes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transferir',
  imports: [FormsModule],
  templateUrl: './transferir.component.html',
  styleUrl: './transferir.component.css'
})
export class TransferirComponent {
 
  transferencia: Transferencia = new Transferencia()
  valor!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public transferenciaModal: Transferencia,
    private dialogRef: MatDialogRef<TransferirComponent>,
    private jwtDecodedService: JwtDecodeService,
    private movimentacoesService: MovimentacoesService
  ) { }

  fecharModal(): void {
    this.dialogRef.close();
    alert('Transferência realizada com sucesso!');
    window.location.reload();
    
  }

  transferir(transferencia: Transferencia): void {
    const contaId: any = this.jwtDecodedService.getIdContaFromToken();
    this.movimentacoesService.transferir(contaId, transferencia)
      .subscribe({
        next: response => this.valor = response,
        complete: () => {
          this.fecharModal();
        },
        error: error => console.error(error)
      })
  }
}
