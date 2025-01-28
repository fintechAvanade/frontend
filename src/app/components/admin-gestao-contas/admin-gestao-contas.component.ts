import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-gestao-contas',
  imports: [],
  templateUrl: './admin-gestao-contas.component.html',
  styleUrl: './admin-gestao-contas.component.css'
})
export class AdminGestaoContasComponent {


  variavelBusca!: string;

  pegarVariavelBusca(item: string): void{
    this.variavelBusca = item
  }
}
