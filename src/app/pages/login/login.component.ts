import { Component } from '@angular/core';
import { ButtonFilledComponent } from '../../shared/button-filled/button-filled.component';

@Component({
  selector: 'app-login',
  imports: [ButtonFilledComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Opcional, mas pode incluir Tailwind aqui se precisar de classes globais
})
export class LoginComponent {}