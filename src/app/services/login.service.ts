import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://192.168.1.2:2200/login' 

  constructor( private http: HttpClient) { }

  autenticar(dados: {email: string , senha: string }): Observable <{token: string; expiracao: string}> {
    return this.http.post<{token: string; expiracao: string}>(this.apiUrl, dados);
  }

  salvarToken(token: string): void {
    localStorage.setItem('token', token); // Armazena o token no localStorage
  }

  obterToken(): string | null {
    return localStorage.getItem('token'); // Recupera o token
  }

  removerToken(): void {
    localStorage.removeItem('token'); // Remove o token quando necessário
  }
}
