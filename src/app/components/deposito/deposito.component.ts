import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']  
})
export class DepositoComponent {
  // Variável que armazena o valor do depósito
  valorInput: number = 0;

  constructor(private router: Router) {}

  // Método para adicionar valores ao depósito
  adicionarValor(valor: number): void {
    this.valorInput += valor;
  }

  // Método para confirmar o depósito
  confirmarDeposito(): void {
    if (this.valorInput > 0) {
      this.router.navigate(['/transacao']);
    } else {
      alert('Por favor, insira um valor válido!');
    }
  }
}
