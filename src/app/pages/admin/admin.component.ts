import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from '../../components/admin-navbar/admin-navbar.component';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../classes/responses/usuario';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, AdminNavbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuariosService,
    private jwtDecodeService: JwtDecodeService,
    private contaService: ContaService
  ) { }

  ngOnInit(): void {

    const nomeUsuario = this.jwtDecodeService.getUserNameFromToken();
    if (nomeUsuario) {
      this.usuario.nomeUsuario = nomeUsuario;
    }
  }
}
