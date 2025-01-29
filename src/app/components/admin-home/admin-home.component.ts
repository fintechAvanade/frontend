import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {


  ativo: boolean = true;

  inativo: boolean = false;

  variavelBusca!: string;

  pegarVariavelBusca(item: string): void{
    this.variavelBusca = item
  }
}
