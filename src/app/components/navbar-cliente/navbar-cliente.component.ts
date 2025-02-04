import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-cliente',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar-cliente.component.html',
  styleUrl: './navbar-cliente.component.css'
})
export class NavbarClienteComponent {
  mostrar: boolean = false;

  constructor(
    private router: Router
  ) { }

  mostrarOpcoes() {
    this.mostrar = !this.mostrar;
  }

  sair() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/']);
  }

}
