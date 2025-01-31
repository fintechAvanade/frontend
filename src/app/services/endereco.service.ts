import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient
  ) { }

  buscarEndereco(cep: string): Observable<any> {
    var url: string = `https://viacep.com.br/ws/${cep}/json/`
    return this.http.get<any>(url);
  }

}
