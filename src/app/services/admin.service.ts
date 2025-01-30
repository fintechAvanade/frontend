import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestaoContas } from '../classes/responses/gestao-contas';
import { CriacaoUsuario } from '../classes/requests/criacao-usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/clientes"

  public getContasClientesGestaoApi(): Observable<GestaoContas[]>{
    const url: string = `${this.baseUrl}/listar`;
    return this.http.get<GestaoContas[]>(url);
  }

  public postUsuarioApi(usuario: CriacaoUsuario): Observable<CriacaoUsuario> {
    return this.http.post<CriacaoUsuario>(`${this.baseUrl}/novo`, usuario)
  }
}
