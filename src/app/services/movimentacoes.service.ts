import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ValorResponse } from "../classes/responses/valor-response";
import { ValorRequest } from "../classes/requests/valor-request";

@Injectable ({
    providedIn: 'root'
})
export class MovimentacoesService {
    private baseUrl = 'http://localhost:8080/movimentacoes';

    constructor(private http: HttpClient){}

    getMovimentacoes(contaId: number): Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUrl}/${contaId}`);

    }

    sacar(contaId:number,request: ValorRequest): Observable<ValorResponse>{
        return this.http.post<ValorResponse>(`${this.baseUrl}/sacar/${contaId}`,
            request
        );
    } 
}