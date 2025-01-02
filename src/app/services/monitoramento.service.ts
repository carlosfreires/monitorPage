import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class MonitoramentoService {

  private apiUrl = 'http://192.168.1.2:2200/monitoramento';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  // // Busca os resultados do monitoramento
  // obterMonitoramento(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}`, {
  //     headers: this.getAuthHeaders(),
  //   });
  // }

  obterLogs(dataInicio: Date, dataFim: Date): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/logs`, {
      headers: this.getAuthHeaders(),
    });
  }
}

