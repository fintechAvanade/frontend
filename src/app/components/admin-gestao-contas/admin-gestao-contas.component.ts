import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { GestaoContas } from '../../classes/responses/gestao-contas';

@Component({
  selector: 'app-admin-gestao-contas',
  imports: [CommonModule],
  templateUrl: './admin-gestao-contas.component.html',
  styleUrl: './admin-gestao-contas.component.css'
})
export class AdminGestaoContasComponent implements OnInit{

  listaClientes: GestaoContas[] = []

  constructor( 
    private adminService: AdminService
  ) { }


  ngOnInit(): void {
    this.adminService.getContasClientesGestaoApi()
      .subscribe(res => this.listaClientes = res)
  }

  ativo: boolean = true;
  inativo: boolean = false;

  variavelBusca!: string;

  pegarVariavelBusca(item: string): void{
    this.variavelBusca = item
  }
}
