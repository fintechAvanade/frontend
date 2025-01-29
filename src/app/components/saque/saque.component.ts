import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';
  
  @Component({
    selector: 'app-saque',
    imports: [FormsModule, SaldoComponent],
    templateUrl: './saque.component.html',
    styleUrls: ['./saque.component.css']  
  })
  export class SaqueComponent implements OnInit{
    // Variável que armazena o valor do depósito
    valorInput: number = 0;

    constructor(private router: Router) {}

    ngOnInit(): void {

    }
    saldo: number = 0;

    // Método para adicionar valores ao saque
    saqueValor(valor: number): void {
    
      this.valorInput += valor; 
    }
      
    // Método para confirmar o saque
    confirmarSaque(): void {
      if (this.valorInput > 0) {
        this.router.navigate(['/transacao']); // falar com o professor como colocar uma rota que coloque que foi efetuado o deposito, e depois apagassse e continuasse na home.
      } else {
        alert('Por favor, insira um valor válido!');
      }
    }
  }