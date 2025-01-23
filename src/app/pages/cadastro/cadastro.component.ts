import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private router: Router) {}

  exibirSecao: number = 1;

  avancar(){
    this.exibirSecao++;
  }

  voltar(){
    this.exibirSecao--;
  }

  navegarParaLogin(): void {
    this.router.navigate(['/login']); // Redireciona para a URI /login
  }
}
