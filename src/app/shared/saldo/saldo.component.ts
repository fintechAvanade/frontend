import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta.service';
// tem que fazer o service

@Component({
  selector: 'app-saldo',
  imports: [],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent implements OnInit {
  saldo: number = 0; 

  constructor(private contaService: ContaService) { }
  
  ngOnInit(): void {
    this.contaService.getSaldoApi(1)
      .subscribe(saldo => this.saldo = saldo.valor);
  }
}

