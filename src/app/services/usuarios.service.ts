import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriacaoUsuario } from '../classes/criacao-usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  //dwabdjwoa

  public postUsuarioApi(usuario: CriacaoUsuario): Observable<CriacaoUsuario>{
    return this.http.post<CriacaoUsuario>(`http://localhost:8080/usuarios/novo`, usuario)
  }

}


