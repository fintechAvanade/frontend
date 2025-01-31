import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      agencia: ['', Validators.required],
      conta: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { agencia, conta, senha } = this.loginForm.value;

      this.authService.login(agencia, conta, senha).subscribe({
        next: (response: { accessToken: string; expiresIn: number }) => {
          this.authService.setToken(response.accessToken);
          console.log('Login bem-sucedido!');
          this.router.navigate(['/cliente']);
        },
        error: (error: any) => {
          console.error('Erro no login:', error);
        },
      });
    }
  }
}
