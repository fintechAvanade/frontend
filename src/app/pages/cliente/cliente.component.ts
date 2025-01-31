import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarClienteComponent } from '../../components/navbar-cliente/navbar-cliente.component';
import { Usuario } from '../../classes/responses/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { JwtDecodeService } from '../../services/jwtDecode.service';

@Component({
  selector: 'app-cliente',
  imports: [RouterOutlet, NavbarClienteComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  
}
