import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'extrato'
})
export class ExtratoPipe implements PipeTransform {

    transform(listaExtrato: any[], dataInicio: string, dataFim: string): any[] {
        if (dataInicio == '' && dataFim == '') {
            return listaExtrato

        } else if (dataInicio == '') {
            const dataFimFormat = new Date(dataFim)
            return listaExtrato.filter(movimentacao => {
                let movData = new Date(movimentacao.dataMovimentacao)
                return dataFimFormat >= movData

            });
        } else if (dataFim == '') {
            const dataInicioFormat = new Date(dataInicio)
            return listaExtrato.filter(movimentacao => {
                let movData = new Date(movimentacao.dataMovimentacao)
                return dataInicioFormat <= movData

            });
        } else if (dataInicio && dataFim) {
            const dataInicioFormat = new Date(dataInicio)
            const dataFimFormat = new Date(dataFim)
            return listaExtrato.filter(movimentacao => {
                let movData = new Date(movimentacao.dataMovimentacao)
                return dataInicioFormat <= movData && dataFimFormat >= movData
            });
        }
        return []
    }
}