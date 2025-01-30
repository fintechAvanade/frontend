import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ChavePix } from "../classes/responses/chave-pix";

@Injectable({
    providedIn: 'root'
    })

export class JwtDecodeService {
    private baseUrl: string = 'http://localhost:8080';
    
    constructor(private http: HttpClient) {}

    getChavesPix(userId: number): Observable<ChavePix[]>{
        return this.http.get<ChavePix[]>(`${this.baseUrl}/chavesPix/lista/conta/${userId}`);
    }

}