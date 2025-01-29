import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true, // Define o componente como standalone
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule diretamente no componente standalone
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  accountForm!: FormGroup; // Inicia a propriedade com '!' para indicar que será inicializada no ngOnInit

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]]
    });
  }

  benefits = [
    // ... (mesma lista de benefícios)
  ];

  studentBenefits = [
    // ... (mesma lista de benefícios para estudantes)
  ];

  accountTypes = [
    // ... (mesma lista de tipos de contas)
  ];

  openAccount() {
    if (this.accountForm.valid) {
      console.log(`CPF informado: ${this.accountForm.value.cpf}`);
      // Adicione lógica para abrir conta aqui, como chamar um serviço de API
    } else {
      console.log('Por favor, informe um CPF válido.');
    }
  }
}
