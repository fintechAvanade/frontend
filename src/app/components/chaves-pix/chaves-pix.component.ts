import { Component, OnInit } from '@angular/core';
import { ChavePix } from '../../classes/responses/chave-pix';
import { ClienteChavesPixService } from '../../services/cliente-chaves-pix.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chaves-pix',
  imports: [CommonModule],
  templateUrl: './chaves-pix.component.html',
  styleUrl: './chaves-pix.component.css'
})
export class ChavesPixComponent implements OnInit {

  chaves: ChavePix[] = [];
  idConta: number = 1;

  constructor(private service: ClienteChavesPixService) { }

  ngOnInit(): void {
    this.service
      .getChavesPix(this.idConta)
      .subscribe(response => this.chaves = response);
  }
}
