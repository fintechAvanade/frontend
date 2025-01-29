import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  baseUrl: string = 'http://localhost:8080/contas';

  constructor(private http: HttpClient) { }

  public getSaldoApi(id: number): Observable<any>{
    const uri = `/${id}/saldo`
    return this.http.get<any>(`${this.baseUrl}${uri}`)
  }
}
