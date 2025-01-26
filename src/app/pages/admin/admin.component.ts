import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../classes/responses/usuario';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, AdminNavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

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
