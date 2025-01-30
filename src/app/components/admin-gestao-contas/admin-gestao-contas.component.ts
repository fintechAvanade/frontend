import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { GestaoContas } from '../../classes/responses/gestao-contas';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FiltroPipe } from '../../pipes/filtro.pipe';

@Component({
  selector: 'app-admin-gestao-contas',
  imports: [CommonModule, FormsModule, RouterLink, FiltroPipe],
  templateUrl: './admin-gestao-contas.component.html',
  styleUrl: './admin-gestao-contas.component.css'
})
export class AdminGestaoContasComponent implements OnInit{
  listaFiltrada: any;

  
  
  constructor( 
    private adminService: AdminService
  ) { }
  
  
  ngOnInit(): void {
    this.adminService.getContasClientesGestaoApi()
    .subscribe(res => {
      this.listaClientes = res
      this.numeroPaginas = Math.ceil(this.listaClientes.length / this._clientesPorPagina);
    });
  }
  
  
  listaClientes: GestaoContas[] = []
  numeroPaginas:number = 0;

  public _clientesPorPagina: number = 6
  
  paginaAtual: number = 1;
  inicio: number = 0;
  fim: number = 6;
  variavelBusca!: string;

  pegarVariavelBusca(item: string): void{
    this.variavelBusca = item
  }

  avancarPagina(): void{
    if (this.paginaAtual < this.numeroPaginas){
      this.inicio += this._clientesPorPagina
      this.fim += this._clientesPorPagina
      this.paginaAtual ++
    }
  }
  voltarPagina(): void{
    if(this.paginaAtual > 1){
      this.inicio -= this._clientesPorPagina
      this.fim -= this._clientesPorPagina
      this.paginaAtual --
    }
  }
}
