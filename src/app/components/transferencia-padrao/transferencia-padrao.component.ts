import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SaldoComponent } from '../../shared/saldo/saldo.component';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { MovimentacoesService } from '../../services/movimentacoes.service';
import { Transferencia } from '../../classes/requests/transferencia';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TransferirComponent } from './transferir/transferir.component';
 
@Component({
  selector: 'app-transferencia-padrao',
 imports: [FormsModule, SaldoComponent, MatDialogModule],
 templateUrl: './transferencia-padrao.component.html',
  styleUrl: './transferencia-padrao.component.css'
})
export class TransferenciaPadraoComponent{
 
  constructor(
        private dialog: MatDialog
  ) {}

  realizarTransferencia(){
      this.dialog.open(TransferirComponent)
    }
 
  }
 
