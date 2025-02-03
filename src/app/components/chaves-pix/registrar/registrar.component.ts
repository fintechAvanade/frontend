import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteChavesPixService } from '../../../services/cliente-chaves-pix.service';
import { JwtDecodeService } from '../../../services/jwtDecode.service';
import { InfoChavesPixUsuario } from '../../../classes/requests/info-chaves-pix-usuario';
import { CriarChavePix } from '../../../classes/requests/criar-chave-pix';

@Component({
  selector: 'app-registrar',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit {
  tipoChave: string = '';
  infoChaves!: InfoChavesPixUsuario;
  valorChave: string = '';


  constructor(
    private dialogRef: MatDialogRef<RegistrarComponent>,
    private chavePixService: ClienteChavesPixService,
    private jwtService: JwtDecodeService,
  ) { }

  ngOnInit(): void {
    let idConta = this.jwtService.getIdContaFromToken()!;

    this.chavePixService.getInfoChavesPix(idConta).subscribe({
      next: (response) => {
        (this.infoChaves = response);
      },
      error: (error) => console.log(error)
    })
  }

  pegarVariavelBusca(): void {
    switch (this.tipoChave) {
      case "cpf":
        this.valorChave = this.infoChaves.cpf
        break;
      case "telefone":
        this.valorChave = this.infoChaves.telefone
        break;
      case "email":
        this.valorChave = this.infoChaves.email
        break;
      case "codigo_aleatorio":
        this.valorChave = ""
        break;

      default:
        break;
    }
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  registrarChave(): void {
    let idConta = this.jwtService.getIdContaFromToken()!;
    this.chavePixService.postNovaChavePix(idConta, new CriarChavePix(this.tipoChave)).subscribe({
      next: (response) => this.dialogRef.close(),
      error: (error) => alert("Ocorreu um erro ao cadastrar a chave, favor tente novamente mais tarde"),
    });
  }


}
