import { Component } from '@angular/core';
import { ButtonFilledComponent } from '../../shared/button-filled/button-filled.component';
import { SecundaryButtonComponent } from '../../shared/secundary-button/secundary-button.component';

@Component({
  selector: 'app-login',
  imports: [ButtonFilledComponent,SecundaryButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Opcional, mas pode incluir Tailwind aqui se precisar de classes globais
})
export class LoginComponent {}