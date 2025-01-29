import { Conta } from './conta'; // Importando a classe Conta
import { TipoChavePix } from '../enum/tipoChavePix'; // Importando o enum TipoChavePix

export class ChavePix {
  id: number;
  conta: Conta; 
  tipoChavePix: TipoChavePix; 
  valorChavePix: string;
  ativo: boolean; 

  constructor(
    id: number,
    conta: Conta,
    tipoChavePix: TipoChavePix,
    valorChavePix: string,
    ativo: boolean
  ) {
    this.id = id;
    this.conta = conta;
    this.tipoChavePix = tipoChavePix;
    this.valorChavePix = valorChavePix;
    this.ativo = ativo;
  }
}
