  import { Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router'; 
  


  // import { SaldoService } from './saldo.service';  
  // // Falta Importar o serviço que criamos para o Saldo.

  @Component({
    selector: 'app-deposito',
    imports: [FormsModule],
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']  
  })
  export class DepositoComponent implements OnInit{
    // Variável que armazena o valor do depósito
    valorInput: number = 0;



    constructor(private router: Router) {}

    ngOnInit(): void {
    }
    saldo: number = 0;



    // Método para adicionar valores ao depósito
    adicionarValor(valor: number): void {
    
      this.valorInput += valor; 
    }
      

    // Método para confirmar o depósito
    confirmarDeposito(): void {
      if (this.valorInput > 0) {
        this.router.navigate(['/transacao']); // falar com o professor como colocar uma rota que coloque que foi efetuado o deposito, e depois apagassse e continuasse na home.
      } else {
        alert('Por favor, insira um valor válido!');
      }
    }
  }