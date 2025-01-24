import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChavePix } from '../classes/responses/chave-pix';

@Injectable({
  providedIn: 'root'
})
export class ClienteChavesPixService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/chavePix";

  public getChavesPix(idConta: number): Observable<ChavePix[]> {
    const endpoint: string = "lista/conta";
    return this.http.get<ChavePix[]>(`${this.baseUrl}/${endpoint}/${idConta}`);
  }

}
