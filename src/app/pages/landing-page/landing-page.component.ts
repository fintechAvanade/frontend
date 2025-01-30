import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true, // Define o componente como standalone
  imports: [ReactiveFormsModule, CommonModule], // Importa ReactiveFormsModule diretamente no componente standalone
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
    console.log(this.benefits);
    //tentando verificar se a lista de benef[icios tá carregando - segue dando erro]
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

  openAccount() {
    if (this.accountForm.valid) {
      console.log(`CPF informado: ${this.accountForm.value.cpf}`);
    } else {
      console.log('Por favor, informe um CPF válido.');
    }
  }
}
