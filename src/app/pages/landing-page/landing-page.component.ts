import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
=======
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, PrimaryButtonComponent], // Importa ReactiveFormsModule diretamente no componente standalone
>>>>>>> 2073abab9352abf0b33245a62473505dff678af1
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  accountForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    // Inicializar o formulário de conta
    this.accountForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]]
    });

    // Log para verificar os benefícios
    console.log(this.benefits);
  }

  benefits = [
    { icon: 'icon1', title: 'Controle seu dinheiro separando em cofrinhos', description: 'Benefício 1 descrição...' },
    { icon: 'icon2', title: 'Seguro de Vida facilitado', description: 'Benefício 2 descrição...' },
    { icon: 'icon3', title: 'Muita segurança com seus dados e seu dinheiro', description: 'Benefício 3 descrição...' },
    { icon: 'icon4', title: 'Cashback em compras', description: 'Benefício 4 descrição...' }
  ];

  studentBenefits = [
    { icon: 'icon5', title: 'Serviços personalizados', description: 'Benefício estudante 1...' },
    { icon: 'icon6', title: 'Assessoria financeira para estudantes', description: 'Benefício estudante 2...' },
    { icon: 'icon7', title: 'Empréstimos estudantis facilitados', description: 'Benefício estudante 3...' },
    { icon: 'icon8', title: 'Taxa zero', description: 'Benefício estudante 4...' },
    { icon: 'icon9', title: 'Crédito facilitado', description: 'Benefício estudante 5...' }
  ];

  accountTypes = [
    { icon: 'icon10', title: 'Conta Simples', description: 'Conta Simples - benefícios...' },
    { icon: 'icon11', title: 'Conta Especial', description: 'Conta Especial - benefícios...' }
  ];

}
