import { Component } from '@angular/core';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { AdminService } from '../../services/admin.service';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-admin-criar-conta',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-criar-conta.component.html',
  styleUrl: './admin-criar-conta.component.css'
})
export class AdminCriarContaComponent {

  constructor(
    private router: Router,
    private enderecoService: EnderecoService,
    private adminService: AdminService
  ) { }

  estadosBrasileiros: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  usuario: CriacaoUsuario = new CriacaoUsuario();
  resposta: any = {}

  getEndereco() {
    let cep = this.usuario.cep;

    this.enderecoService.buscarEndereco(cep).subscribe({
      next: (response) => {
        this.usuario.cidade = response.localidade;
        this.usuario.bairro = response.bairro;
        this.usuario.estado = response.uf;
        this.usuario.logradouro = response.logradouro;
      }
    })

  }

  incluir(usuario: CriacaoUsuario): void {
    this.adminService.postUsuarioApi(usuario)
      .subscribe({
        next: (res) => {
          this.resposta = res
        },
        complete: () => {
          console.log(this.resposta)
          const mensagem: string = `Agencia: ${this.resposta['agencia']}\nNumero da conta: ${this.resposta['conta']}\n Senha para pagamentos: ${this.resposta['senhaPagamento']}`
          window.alert(mensagem)
        },
        error: erro => {
          console.error(erro);
          window.alert(erro)
        }
      })
  }
}
