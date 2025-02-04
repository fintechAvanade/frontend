import { Component, OnInit } from '@angular/core';
import { CriacaoUsuario } from '../../classes/requests/criacao-usuario';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';
import { EdicaoUsuario } from '../../classes/requests/edicao-usuario';
import { EditarUsuario } from '../../classes/responses/editar-usuario';

@Component({
  selector: 'app-admin-editar-conta',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './admin-editar-conta.component.html',
  styleUrl: './admin-editar-conta.component.css'
})
export class AdminEditarContaComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { 

  }
  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id') as string;
    this.adminService.getClienteInfosApi(parseInt(this.idUser))
      .subscribe(res => {
        this.usuarioResponse = res
        console.log(res)
      })
    }
    

  

  idUser: string = '';
  usuarioRequest: EdicaoUsuario = new EdicaoUsuario();
  usuarioResponse: EditarUsuario = new EditarUsuario();
  
  mensagem!: any

  estadosBrasileiros: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  

  editarConta(usuario: EditarUsuario): void {
    this.usuarioRequest.nome = usuario.nome;
    this.usuarioRequest.dataNascimento = usuario.dataNascimento;
    this.usuarioRequest.email = usuario.email;
    this.usuarioRequest.telefone = usuario.telefone;
    this.usuarioRequest.nomeUsuario = usuario.nomeUsuario;
    this.usuarioRequest.cep = usuario.cep;
    this.usuarioRequest.cidade = usuario.cidade;
    this.usuarioRequest.bairro = usuario.bairro;
    this.usuarioRequest.logradouro = usuario.logradouro;
    this.usuarioRequest.estado = usuario.estado;
    this.usuarioRequest.numero = usuario.numero as number;
    this.usuarioRequest.complemento = usuario.complemento;
    this.usuarioRequest.tipoConta = usuario.tipoConta
    console.log(this.usuarioRequest)
    
    this.adminService.putEditarUsuario(this.usuarioRequest, parseInt(this.idUser))
      .subscribe({
        next: res => this.mensagem = res,
        complete: () => {
          console.log(this.mensagem)
          window.alert(this.mensagem.mensagem)
        },
        error: e => console.error(e)
      })
  }
}
