import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class TransferenciaPadraoComponent {

  transferencia: Transferencia = new Transferencia()
  valor!: any;

  constructor(
    private jwtDecodedService: JwtDecodeService,
    private movimentacoesService: MovimentacoesService
  ) { }


  transferir(transferencia: Transferencia): void {
    const contaId: any = this.jwtDecodedService.getIdContaFromToken();
    this.movimentacoesService.transferir(contaId, transferencia)
      .subscribe({
        next: response => this.valor = response,
        complete: () => {
          alert("Transferencia realizada com sucesso!")
          window.location.reload();
        },
        error: error => {
          console.error(error)
          alert("Preencha os dados corretamente!")
        }
      });
  }
}

