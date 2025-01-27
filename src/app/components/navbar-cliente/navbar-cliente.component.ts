import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: '',
  imports: [RouterLink],
  templateUrl: './navbar-cliente.component.html',
  styleUrl: './navbar-cliente.component.css'
})
export class NavbarClienteComponent {

  collapsed = false;
  
}
