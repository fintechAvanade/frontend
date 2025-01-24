import { Component } from '@angular/core';
import { ButtonFilledComponent } from '../../shared/button-filled/button-filled.component';
import { SecundaryButtonComponent } from '../../shared/secundary-button/secundary-button.component';
import { CustomInputComponent } from "../../shared/input-label/input-label.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonFilledComponent, SecundaryButtonComponent, CustomInputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
