import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import { ContaService } from '../../services/conta.service';
import { CartaoService } from '../../services/cartoes.service';
import { Usuario } from '../../classes/responses/usuario';

import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cliente-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cliente-home.component.html',
  styleUrl: './cliente-home.component.css',
})
export class ClienteHomeComponent implements OnInit {
  valor: number = 0;
  cartao: any = {};
  usuario: Usuario = new Usuario();

  constructor(
    private jwtDecodedService: JwtDecodeService,
    private contaSerivce: ContaService,
    private cartaoService: CartaoService
  ) { }

  ngOnInit(): void {
    const userId = this.jwtDecodedService.getUserIdFromToken();
    const contaId = this.jwtDecodedService.getIdContaFromToken();
    if (contaId) {
      // Busca o saldo da conta
      this.contaSerivce.getSaldoApi(contaId).subscribe({
        next: (response) => this.valor = response.valor,
        error: (error) => console.log(error),
      });
    } else {
      {
        console.log('Erro ao recuperar saldo da conta');
      }
    }
    if (userId) {
      // Busca as informações do cartão
      this.cartaoService.getCartao(userId).subscribe({
        next: (response) => {
          if (response && response.length > 0) {
            this.cartao = response[0]; // Acessa o primeiro cartão da lista
          } else {
            console.error('Nenhum cartão encontrado.');
          }
        },
        error: (error) => console.error('Erro ao recuperar cartão', error),
      });
    }
    const nomeUsuario = this.jwtDecodedService.getUserNameFromToken();
    if(nomeUsuario) {
      this.usuario.nomeUsuario = nomeUsuario;
    }
  }
}