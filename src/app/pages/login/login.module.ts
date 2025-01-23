import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonFilled } from './components/buttonfilled/buttonfilled.component'; // Caminho atualizado
import { FormsModule } from '@angular/forms'; // Se precisar usar inputs ou validações

@NgModule({
  declarations: [LoginComponent, ButtonFilled],
  imports: [CommonModule, FormsModule], // Se precisar de diretivas como forms
  exports: [LoginComponent],
})
export class LoginModule {}
