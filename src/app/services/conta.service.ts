import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  baseUrl: string = 'http://localhost:8080/contas';

  constructor(private http: HttpClient) { }

  public getSaldo(idConta: number): Observable<any>{
    const uri = `/${idConta}/saldo`
    return this.http.get<any>(`${this.baseUrl}${uri}`)
  }

  public getEntradas(idConta: number): Observable<any>{
    const uri = `/${idConta}/entradas`
    return this.http.get<any>(`${this.baseUrl}${uri}`)
  }
  
  public getSaidas(idConta: number): Observable<any>{
    const uri = `/${idConta}/saidas`
    return this.http.get<any>(`${this.baseUrl}${uri}`)
  }
  
  public getConta(idConta: number): Observable<any>{
    const uri = `/${idConta}`
    return this.http.get<any>(`${this.baseUrl}${uri}`)
  }
}
