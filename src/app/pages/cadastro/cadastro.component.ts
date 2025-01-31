import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { AdminService } from '../../services/admin.service';
import { EnderecoService } from '../../services/endereco.service';


@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, NgOptimizedImage, FormsModule, PrimaryButtonComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  constructor(
    private router: Router,
    private adminService: AdminService,
    private enderecoService: EnderecoService
  ) { }

  usuario: CriacaoUsuario = new CriacaoUsuario(); // Objeto para armazenar os dados do usuário
  resposta: any = {}; // Armazena a resposta da API
  exibirSecao: number = 1; // Controla a seção atual do formulário


  // Função para pegar o cep
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

  // Função para converter o formato da data de dd/mm/yyyy para yyyy-mm-dd
  convertDateFormat(dateString: string | undefined): string {
    if (!dateString) {
      console.error("Data de nascimento está indefinida.");
      return "";
    }

    // Se a data já estiver no formato yyyy-mm-dd, retorna sem converter
    const isoFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (isoFormatRegex.test(dateString)) {
      return dateString;
    }

    // Se estiver no formato dd/mm/yyyy, converte
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateString)) {
      console.error("Formato de data inválido:", dateString);
      return "";
    }

    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  }

  // Valida o formato da data
  validarData(data: string): boolean {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(data);
  }

  // Avança para a próxima seção do formulário
  avancar(): void {
    if (this.exibirSecao === 1 && this.usuario.dataNascimento) {
      if (!this.validarData(this.usuario.dataNascimento)) {
        alert("Data inválida! Use o formato dd/mm/yyyy.");
        return;
      }
      this.usuario.dataNascimento = this.convertDateFormat(this.usuario.dataNascimento);
    }
    this.exibirSecao++;
  }

  // Volta para a seção anterior do formulário
  voltar(): void {
    this.exibirSecao--;
  }

  // Navega para a página de login
  navegarParaLogin(): void {
    this.router.navigate(['/login']);
  }

  // Envia os dados do usuário para o back-end
  incluir(usuario: CriacaoUsuario): void {
    if (usuario.dataNascimento) {
      usuario.dataNascimento = this.convertDateFormat(usuario.dataNascimento);
      if (!usuario.dataNascimento) {
        alert("Erro ao processar a data de nascimento.");
        return;
      }
    }

    this.adminService.postUsuarioApi(usuario).subscribe({
      next: (res) => {
        this.resposta = res;
      },
      complete: () => {
        const mensagem: string = `Agência: ${this.resposta['agencia']}\nNúmero da conta: ${this.resposta['conta']}\nSenha para pagamentos: ${this.resposta['senhaPagamento']}`;
        this.router.navigate(['/cliente']);
        window.alert(mensagem);
      },
      error: (erro) => {
        console.error(erro);
        window.alert("Erro ao cadastrar usuário: " + erro.message);
      }
    });
  }
}
