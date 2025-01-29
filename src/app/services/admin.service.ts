import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GestaoContas } from '../classes/responses/gestao-contas';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/contas"

  public getContasClientesGestaoApi(): Observable<GestaoContas[]>{
    const url: string = `${this.baseUrl}/clientes`;
    return this.http.get<GestaoContas[]>(url);
  }
}
