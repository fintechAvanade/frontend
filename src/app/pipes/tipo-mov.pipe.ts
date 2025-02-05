import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoMov'
})
export class TipoMovPipe implements PipeTransform {

  transform(extrato: any[], tipoMov: string): any[] {
    return extrato.filter( movimentacao => movimentacao.tipoMovimentacao.includes(tipoMov.toUpperCase()));
  }

}
