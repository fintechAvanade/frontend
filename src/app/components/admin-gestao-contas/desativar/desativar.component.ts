import { Component, Inject, Input } from '@angular/core';
import { GestaoContas } from '../../../classes/responses/gestao-contas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-desativar',
  imports: [],
  templateUrl: './desativar.component.html',
  styleUrl: './desativar.component.css'
})
export class DesativarComponent {

  constructor(
      @Inject(MAT_DIALOG_DATA) public cliente: GestaoContas,
      private dialogRef: MatDialogRef<DesativarComponent>,
      private adminService: AdminService,
    ) {  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  confirmarDesativacao(): void {
    this.adminService.putDesativarUsuario(this.cliente.id)
      .subscribe({
        complete: () => {
          window.alert('Conta desativada')
          window.location.reload()
        },
        error: e => window.alert(e)
      }
      )
    this.dialogRef.close();
  }
}
