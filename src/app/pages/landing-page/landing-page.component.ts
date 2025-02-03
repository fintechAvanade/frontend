import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../shared/primary-button/primary-button.component';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, PrimaryButtonComponent], // Importa ReactiveFormsModule diretamente no componente standalone
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
    { icon: 'icon1', title: 'Controle seu dinheiro de facilmente', description: 'Veja de forma rápida e fácil as movimentações do seu dinheiro' },
    { icon: 'icon2', title: 'Transações no Pix', description: 'Controle suas chaves, faça transferências e acompanhe tudo' },
    { icon: 'icon3', title: 'Muita segurança com seus dados e seu dinheiro', description: 'Temos autenticação para garantir altos padrões de segurança' },
    { icon: 'icon4', title: 'Crie sua conta em segundos', description: 'Sabemos que ninguém tem tempo a perder' }
  ];

  studentBenefits = [
    { icon: 'icon5', title: 'Serviços personalizados', description: '' },
    { icon: 'icon6', title: 'Assessoria financeira para estudantes', description: '' },
    { icon: 'icon7', title: 'Empréstimos estudantis facilitados', description: '' },
    { icon: 'icon8', title: 'Taxa zero', description: '' },
    { icon: 'icon9', title: 'Crédito facilitado', description: '' }
  ];

  accountTypes = [
    { icon: 'icon10', title: 'Conta Simples', description: 'Aquele básico que é bem feito' },
    { icon: 'icon11', title: 'Conta Especial', description: 'Se você quer sonhar alto, a gente te ajuda' }
  ];

}