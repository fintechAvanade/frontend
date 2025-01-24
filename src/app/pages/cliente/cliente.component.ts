import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Usuario } from '../../classes/responses/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-cliente',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

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
