import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';  
// import { SaldoService } from './saldo.service';  
// // Falta Importar o serviço que criamos para o Saldo.

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']  
})
export class DepositoComponent implements OnInit{
  // Variável que armazena o valor do depósito
  valorInput: number = 0;



  constructor(private router: Router, private saldoService: SaldoService) {}

  ngOnInit(): void {
  this.obterSaldo();
  }
  saldo: number = 0;

  obterSaldo(): void {
    this.saldoService.obterSaldo().subscribe( //subscribe permite que você "escute" a resposta da API e faça algo com ela (como salvar o valor em uma variável).
      (data) => { //quando a requisicao foi bem-sucedida
        this.saldo = data.saldo;  // Assume que o saldo vem dentro de uma chave "saldo" da api
      },
  }


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

//falta criar o service!!!