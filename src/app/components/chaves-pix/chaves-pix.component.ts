import { Component, OnInit } from '@angular/core';
import { ChavePix } from '../../classes/responses/chave-pix';
import { ClienteChavesPixService } from '../../services/cliente-chaves-pix.service';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../classes/responses/usuario';
import { JwtDecodeService } from '../../services/jwtDecode.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { RegistrarComponent } from './registrar/registrar.component';


@Component({
  selector: 'app-chaves-pix',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './chaves-pix.component.html',
  styleUrl: './chaves-pix.component.css'
})
export class ChavesPixComponent implements OnInit {
  chaves: ChavePix[] = [];
  usuario: Usuario = new Usuario();

  constructor(
    private chavePixService: ClienteChavesPixService,
    private usuarioService: UsuariosService,
    private JwtDecodeService: JwtDecodeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const contaId = this.JwtDecodeService.getIdContaFromToken();
    if(contaId){
    this.chavePixService.getChavesPix(contaId)
      .subscribe({
        next: (response) => (this.chaves = response),
        error: (error) => console.log(error)
      });
    }
  }

  registrarChave() {
        this.dialog.open(RegistrarComponent)
  }
}
