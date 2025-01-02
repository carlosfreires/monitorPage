import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitarAcessoService {

  private apiUrl = 'http://192.168.1.2:2200/solicitarAcesso'

  constructor( private http: HttpClient ) { }

  solicitarAcesso(dados: {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    motivo: string;
    perfil_solicitado: string;
  }): Observable <{ message: string; solicitacaoID: number }> {
        return this.http.post<{ message: string ; solicitacaoID: number }>(this.apiUrl , dados);
  }
}
