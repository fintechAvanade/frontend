import { Component } from '@angular/core';
import { ButtonFilledComponent } from '../../shared/button-filled/button-filled.component';
import { SecundaryButtonComponent } from '../../shared/secundary-button/secundary-button.component';
import { CustomInputComponent } from "../../shared/input-label/input-label.component";

@Component({
  selector: 'app-login',
  imports: [ButtonFilledComponent, SecundaryButtonComponent, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Opcional, mas pode incluir Tailwind aqui se precisar de classes globais
})
export class LoginComponent {}