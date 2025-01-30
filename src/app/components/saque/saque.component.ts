import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SaldoComponent } from '../../shared/saldo/saldo.component';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ValorRequest } from '../../classes/requests/valor-request';
  
  @Component({
    selector: 'app-saque',
    imports: [FormsModule, SaldoComponent],
    templateUrl: './saque.component.html',
    styleUrls: ['./saque.component.css']  
  })
  export class SaqueComponent implements OnInit{
    // Variável que armazena o valor do depósito
    valorInput: number = 0;
    contaId: number|null = 0;
    requestDescricao: string= '';
    valorResponse: number=0;


    constructor(
      private router: Router,
      private service: MovimentacoesService,
      private jwtDecodedService: JwtDecodeService

    ) {}

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
      
    // Método para confirmar o saque
    confirmarSaque(): void {
      if (this.valorInput > 0 && this.contaId) {
        const request=new ValorRequest(this.valorInput, this.requestDescricao);
        this.service.sacar(this.contaId,request)
        
        .subscribe({
          next:(response)=>this.valorResponse=response.valor,
          error: (error) => console.log(error),
 
        })
        this.router.navigate(['/transacao']); // falar com o professor como colocar uma rota que coloque que foi efetuado o deposito, e depois apagassse e continuasse na home.
      
      
      } else {
        alert('Por favor, insira um valor válido!');
      }
    }
  }