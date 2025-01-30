import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-cliente-home',
  imports: [CommonModule],
  templateUrl: './cliente-home.component.html',
  styleUrl: './cliente-home.component.css'
})
export class ClienteHomeComponent {
  saldo: number = 0;

  constructor(
    private jwtDecodedService: JwtDecodeService,
    private contaSerivce: ContaService
  ) { }

  ngOnInit(): void {
    const contaId = this.jwtDecodedService.getUserIdFromToken();
    if (contaId) {
      this.contaSerivce.getSaldoApi(contaId).subscribe({
        next: (response) => (this.saldo = response),
        error: (error) => console.log(error)
      });
    }else{
      console.log('Erro ao recuperar saldo da conta')
    }
  }
}
