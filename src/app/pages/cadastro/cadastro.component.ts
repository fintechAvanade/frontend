import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { CriacaoUsuario } from '../../classes/criacao-usuario';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, 
            NgOptimizedImage, 
            FormsModule, 
            PrimaryButtonComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {


  constructor(private router: Router, 
              private usuarioService: UsuariosService) {}

  usuario: CriacaoUsuario = new CriacaoUsuario();


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

  incluir(usuario: CriacaoUsuario): void{
    this.usuarioService.postUsuarioApi(usuario)
    .subscribe({
      complete: () => {
        this.router.navigate(['/cliente'])
      },
      error: erro => {
        console.error(erro);
        window.alert(erro)
      }
    })
  }
}
