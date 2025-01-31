import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';
  

@Component({
  selector: 'app-pagamento-boletos',
  imports: [FormsModule, SaldoComponent],
  templateUrl: './pagamento-boletos.component.html',
  styleUrl: './pagamento-boletos.component.css'
})
export class PagamentoBoletosComponent implements OnInit{
  router: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  valorBoleto: number = 0;

    // Método para confirmar o depósito
    confirmarPagamento(): void {
      if (this.valorBoleto > 0) {
        this.router.navigate(['/transacao']);
      } else {
        alert('Por favor, insira um valor válido!');
      }
    }
}