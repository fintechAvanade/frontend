import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';
  

@Component({
  selector: 'app-pagamento-boletos',
  imports: [FormsModule, SaldoComponent],
  templateUrl: './pagamento-boletos.component.html',
  styleUrl: './pagamento-boletos.component.css'
})
export class PagamentoBoletosComponent{} 


