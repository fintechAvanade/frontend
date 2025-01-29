import { Component } from '@angular/core';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-editar-conta',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './admin-editar-conta.component.html',
  styleUrl: './admin-editar-conta.component.css'
})
export class AdminEditarContaComponent {

    checkboxSimples: boolean = false;
    checkboxEspecial: boolean = false;
    valorSimples: string = 'SIMPLES';
    valorEspecial: string = 'ESPECIAL';
    valorSelecionado: string = '';
  
    estadosBrasileiros: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    usuario: CriacaoUsuario = new CriacaoUsuario();
   
    selecionarCheckbox(checkbox: string){
      if(checkbox === 'checkboxSimples') {
        this.checkboxEspecial = false
        this.valorSelecionado = this.valorSimples
      } else if(checkbox === 'checkboxEspecial'){
        this.checkboxSimples = false
        this.valorSelecionado = this.valorEspecial
      } 
      
      if (!this.checkboxSimples && !this.checkboxEspecial){
        this.valorSelecionado = ''
      }
    }
}
