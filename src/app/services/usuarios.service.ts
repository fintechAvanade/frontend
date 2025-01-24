import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriacaoUsuario } from '../classes/requests/criacao-usuario';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/responses/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  public getSimpleUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/`)
  }

  public postUsuarioApi(usuario: CriacaoUsuario): Observable<CriacaoUsuario> {
    return this.http.post<CriacaoUsuario>(`${this.baseUrl}/novo`, usuario)
  }

}


