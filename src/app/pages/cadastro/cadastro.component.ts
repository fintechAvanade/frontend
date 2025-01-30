import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { AdminService } from '../../services/admin.service';


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
    private adminService: AdminService) { }

  usuario: CriacaoUsuario = new CriacaoUsuario();

  resposta: any = {}

  exibirSecao: number = 1;

  avancar() {
    this.exibirSecao++;
  }

  voltar() {
    this.exibirSecao--;
  }

  navegarParaLogin(): void {
    this.router.navigate(['/login']); // Redireciona para a URI /login
  }

  incluir(usuario: CriacaoUsuario): void {
    this.adminService.postUsuarioApi(usuario)
      .subscribe({
        next: (res) => {
          this.resposta = res
        },
        complete: () => {
          const mensagem: string = `Agencia: ${this.resposta['agencia']}\nNumero da conta: ${this.resposta['conta']}\n Senha para pagamentos: ${this.resposta['senhaPagamento']}`
          this.router.navigate(['/cliente'])
          window.alert(mensagem)
        },
        error: erro => {
          console.error(erro);
          window.alert(erro)
        }
      })
  }
}
