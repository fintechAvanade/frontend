import { Component, OnInit } from '@angular/core';
import { ChavePix } from '../../classes/responses/chave-pix';
import { ClienteChavesPixService } from '../../services/cliente-chaves-pix.service';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../classes/responses/usuario';
import { JwtDecodeService } from '../../services/jwtDecode.service';

@Component({
  selector: 'app-chaves-pix',
  imports: [CommonModule],
  templateUrl: './chaves-pix.component.html',
  styleUrl: './chaves-pix.component.css'
})
export class ChavesPixComponent implements OnInit {
  chaves: ChavePix[] = [];
  usuario: Usuario = new Usuario();

  constructor(
    private chavePixService: ClienteChavesPixService,
    private usuarioService: UsuariosService,
    private JwtDecodeService: JwtDecodeService
  ) { }

  ngOnInit(): void {
    const userId = this.JwtDecodeService.getUserIdFromToken();
    if(userId){
    this.chavePixService.getChavesPix(userId)
      .subscribe({
        next: (response) => (this.chaves = response),
        error: (error) => console.log(error)
      });
    }
  }
}
