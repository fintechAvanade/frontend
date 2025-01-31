import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { CommonModule } from '@angular/common';
// tem que fazer o service

@Component({
  selector: 'app-saldo',
  imports: [CommonModule],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent implements OnInit {
  valor: number = 0;

  constructor(
    private contaService: ContaService,
    private JwtDecodedService: JwtDecodeService) { }

  ngOnInit(): void {
    const contaId = this.JwtDecodedService.getIdContaFromToken();
    if (contaId) {
      // Busca o saldo da conta
      this.contaService.getSaldo(contaId).subscribe({
        next: (response) => this.valor = response.valor,
        error: (error) => console.log(error),
      });
    } else {
      {
        console.log('Erro ao recuperar saldo da conta');
      }
    }
  }
}
