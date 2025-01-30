import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriacaoUsuario } from '../classes/requests/criacao-usuario';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/responses/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
//baseUrl: string = 'http://localhost:8080/chavePix/lista/conta';
  baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  public getUsuarioApi(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/chavesPix/lista/conta/${id}`)
  }

  

}


