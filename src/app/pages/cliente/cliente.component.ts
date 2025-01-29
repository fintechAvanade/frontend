import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { NavbarClienteComponent } from '../../components/navbar-cliente/navbar-cliente.component';
// comentei pois está dando erro por não está sendo utilizado (Mari)
import { Usuario } from '../../classes/responses/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-cliente',
  imports: [RouterOutlet],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit{

  idUsuario: number = 1;
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.usuarioService
      .getUsuarioApi(this.idUsuario)
      .subscribe(response => this.usuario = response);

  }

}
