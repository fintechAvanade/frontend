import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';

@Component({
  selector: 'app-transferencia-padrao',
 imports: [FormsModule, SaldoComponent],
 templateUrl: './transferencia-padrao.component.html',
  styleUrl: './transferencia-padrao.component.css'
})
export class TransferenciaPadraoComponent {

}
