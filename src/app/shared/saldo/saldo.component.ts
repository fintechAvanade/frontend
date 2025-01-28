import { Component, OnInit } from '@angular/core';
// tem que fazer o service

@Component({
  selector: 'app-saldo',
  imports: [],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.css'
})
export class SaldoComponent implements OnInit {
  saldo: number = 0; 

  constructor(private saldoService: SaldoService) { }
  
  ngOnInit(): void {
    this.saldoService.getSaldo().subscribe(saldo => {
      this.saldo = saldo;
    });
  }
}

