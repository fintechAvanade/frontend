import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
    })
    export class CartaoService {
        private baseUrl = 'http://localhost:8080/cartoes';

        constructor(private http: HttpClient) { }

        // necessario aguardar para refatorar com o idusuario
        getCartao(id: number): Observable<any> {
            return this.http.get<any>(`${this.baseUrl}/usuario/${id}`);
        }
    }    