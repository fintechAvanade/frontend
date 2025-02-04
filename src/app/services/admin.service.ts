import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestaoContas } from '../classes/responses/gestao-contas';
import { CriacaoUsuario } from '../classes/requests/criacao-usuario';
import { EdicaoUsuario } from '../classes/requests/edicao-usuario';
import { EditarUsuarioComponent } from '../components/editar-usuario/editar-usuario.component';
import { EditarUsuario } from '../classes/responses/editar-usuario';

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

  public getClienteInfosApi(idConta: number): Observable<EditarUsuario>{
    const url: string = `${this.baseUrl}/${idConta}`
    return this.http.get<EditarUsuario>(url)
  }

  public postUsuarioApi(usuario: CriacaoUsuario): Observable<CriacaoUsuario> {
    return this.http.post<CriacaoUsuario>(`${this.baseUrl}/novo`, usuario)
  }

  public putDesativarUsuario(idConta: number): Observable<string>{
    const url: string = `${this.baseUrl}/desativar/${idConta}`
    return this.http.put<string>(url, {})
  }
  public putAtivarUsuario(idConta: number): Observable<string>{
    const url: string = `${this.baseUrl}/ativar/${idConta}`
    return this.http.put<string>(url, {})
  }

  public putEditarUsuario(usuario: EdicaoUsuario, idUser: number): Observable<string>{
    const url: string = `${this.baseUrl}/editar/${idUser}`
    return this.http.put<string>(url, usuario)
  }
}
