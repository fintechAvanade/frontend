import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login-cliente';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(agencia: string, conta: string, senha: string) {
    return this.http.post<{ accessToken: string; expiresIn: number }>(
      this.apiUrl,
      { agencia, conta, senha }
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
