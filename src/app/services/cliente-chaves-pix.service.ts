import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChavePix } from '../classes/responses/chave-pix';
import { CriarChavePix } from '../classes/requests/criar-chave-pix';
import { InfoChavesPixUsuario } from '../classes/requests/info-chaves-pix-usuario';
import { Mensagem } from '../classes/responses/mensagem';

@Injectable({
  providedIn: 'root'
})
export class ClienteChavesPixService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/chavePix";

  public getChavesPix(idConta: number): Observable<ChavePix[]> {
    const endpoint: string = "listar";
    return this.http.get<ChavePix[]>(`${this.baseUrl}/${endpoint}/${idConta}`);
  }

  public getInfoChavesPix(idConta: number): Observable<InfoChavesPixUsuario> {
    const endpoint: string = "buscar-informacoes";
    return this.http.get<InfoChavesPixUsuario>(`${this.baseUrl}/${endpoint}/${idConta}`);
  }

  public postNovaChavePix(idConta: number, request: CriarChavePix): Observable<ChavePix> {
    const endpoint: string = "novo";
    return this.http.post<ChavePix>(`${this.baseUrl}/${endpoint}/${idConta}`, request);
  }

  public putDesativarChave(idChavePix: number): Observable<Mensagem> {
    const endpoint: string = "desativar";
    return this.http.put<Mensagem>(`${this.baseUrl}/${endpoint}/${idChavePix}`, {});
  }

}
