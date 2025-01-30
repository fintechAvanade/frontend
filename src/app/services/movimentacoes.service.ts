import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class MovimentacoesService {
    private baseUrl = 'http://localhost:8080/movimentacoes';

    constructor(private http: HttpClient){}

    getMovimentacoes(contaId: number): Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUrl}/${contaId}`);

    }
}
