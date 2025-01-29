import { Component } from '@angular/core';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-criar-conta',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-criar-conta.component.html',
  styleUrl: './admin-criar-conta.component.css'
})
export class AdminCriarContaComponent {

  constructor() { }

  estadosBrasileiros: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  usuario: CriacaoUsuario = new CriacaoUsuario();
 
  
}
