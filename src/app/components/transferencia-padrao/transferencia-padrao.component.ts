import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaldoComponent } from '../../shared/saldo/saldo.component';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { Transferencia } from '../../classes/requests/transferencia';
 
@Component({
  selector: 'app-transferencia-padrao',
 imports: [FormsModule, SaldoComponent],
 templateUrl: './transferencia-padrao.component.html',
  styleUrl: './transferencia-padrao.component.css'
})
export class TransferenciaPadraoComponent implements OnInit{
 
  transferencia: Transferencia = new Transferencia()
  valor!: any;
 
  constructor(
        private jwtDecodedService: JwtDecodeService,
        private movimentacoesService: MovimentacoesService
  ) {}
 
  ngOnInit(): void {
 
  }
 
  transferir(transferencia: Transferencia){
    const contaId: any = this.jwtDecodedService.getIdContaFromToken();
    this.movimentacoesService.transferencia(contaId, transferencia)
    .subscribe({
      next: res => this.valor = res,
      complete: () => {
        window.location.reload();
      },
      error: e => console.error(e)
    })
 
  }}