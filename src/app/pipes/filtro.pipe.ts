import { Pipe, PipeTransform } from '@angular/core';
import { GestaoContas } from '../classes/responses/gestao-contas';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listaClientes: GestaoContas[] | any[], input: string, tipo: string): GestaoContas[] {
    if(tipo == 'nome'){
      return !input ? listaClientes : listaClientes.filter(cliente => cliente[tipo].toLowerCase().includes(input.toLowerCase()))
    }
    return !input ? listaClientes : listaClientes.filter(cliente => cliente[tipo].includes(input))
  }

}
