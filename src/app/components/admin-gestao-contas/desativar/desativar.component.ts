import { Component, Inject, Input } from '@angular/core';
import { GestaoContas } from '../../../classes/responses/gestao-contas';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-desativar',
  imports: [],
  templateUrl: './desativar.component.html',
  styleUrl: './desativar.component.css'
})
export class DesativarComponent {

  constructor(
      @Inject(MAT_DIALOG_DATA) public cliente: GestaoContas,
      private dialogRef: MatDialogRef<DesativarComponent>
    ) {  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  confirmarDesativacao(): void {
    this.dialogRef.close();
  }
}
