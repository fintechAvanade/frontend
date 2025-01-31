import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { GestaoContas } from '../../classes/responses/gestao-contas';
import { FiltroPipe } from "../../pipes/filtro.pipe";

@Component({
  selector: 'app-admin-home',
  imports: [RouterLink, CommonModule, FiltroPipe],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.getContasClientesGestaoApi()
    .subscribe(res => {
      this.listaClientes = res
    });
  }

  listaClientes: GestaoContas[] = []
  
  ativo: boolean = true;

  inativo: boolean = false;

  variavelBusca!: string;

  pegarVariavelBusca(item: string): void{
    this.variavelBusca = item
  }
}
