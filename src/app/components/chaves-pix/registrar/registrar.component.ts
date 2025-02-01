import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registrar',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
 
  constructor(
    private dialogRef: MatDialogRef<RegistrarComponent>
  ) { }

  tipoChave: string = '';



  pegarVariavelBusca(item: string): void{
    this.tipoChave = item
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  registrarChave(): void{
    
    this.dialogRef.close();
  }
}
