import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastrarEquipamentoService {
  
  private apiUrl = "http://192.168.1.2:2200/cadastrarEquipamento"

  constructor( private http: HttpClient) { }


  cadastrarEquipamento(equipamento: any): Observable<any> {
  return this.http.post(this.apiUrl, equipamento).pipe(
        catchError((error) => {
          console.error('Erro ao cadastrar o equipamento:', error); // Log de erro
          return throwError(() => new Error('Erro ao cadastrar o equipamento')); // Lança um erro customizado
        })
      );
}

}
