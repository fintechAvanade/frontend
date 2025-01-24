import { Component, OnInit } from '@angular/core';
import { ChavePix } from '../../classes/responses/chave-pix';
import { ClienteChavesPixService } from '../../services/cliente-chaves-pix.service';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../classes/responses/usuario';


@Component({
  selector: 'app-chaves-pix',
  imports: [CommonModule],
  templateUrl: './chaves-pix.component.html',
  styleUrl: './chaves-pix.component.css'
})
export class ChavesPixComponent implements OnInit {

  chaves: ChavePix[] = [];
  idConta: number = 1;
  idUsuario: number = 1;
  usuario: Usuario = new Usuario();

  constructor(
    private chavePixService: ClienteChavesPixService,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.chavePixService
      .getChavesPix(this.idConta)
      .subscribe(response => this.chaves = response);

    this.usuarioService
      .getUsuarioApi(this.idUsuario)
      .subscribe(response => this.usuario = response);

  }
}
