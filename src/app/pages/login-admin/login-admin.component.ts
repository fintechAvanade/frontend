import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  loginForm: FormGroup;
  
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        usuario: ['', Validators.required],
        senha: ['', Validators.required],
      });
    }
  
    login() {
      if (this.loginForm.valid) {
        const { usuario, senha } = this.loginForm.value;
  
        this.authService.loginAdmin(usuario, senha).subscribe({
          next: (response: { accessToken: string }) => {
            this.authService.setToken(response.accessToken);
            console.log('Login bem-sucedido!');
            this.router.navigate(['/admin']);
          },
          error: (error: any) => {
            console.error('Erro no login:', error);
          },
        });
      }
    }

}
