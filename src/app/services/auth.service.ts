import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/usuarios/login-cliente';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  public login(agencia: string, conta: string, senha: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}`, { agencia, conta, senha })
      .pipe(
        take(1),
        tap((response: any) => response.accessToken)
      );
  }

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
    this.tokenSubject.next(token);
  }

  getToken() {
    return this.tokenSubject.asObservable();
  }

  getTokenValue() {
    return localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
  }
}