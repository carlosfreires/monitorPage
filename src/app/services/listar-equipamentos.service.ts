import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError , } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListarEquipamentosService {

  private apiUrl = 'http://192.168.1.2:2200/listarEquipamentos'

  constructor(private http: HttpClient ) { }

  listarEquipamentos(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao listar equipamentos:', error); // Log de erro
        return throwError(() => new Error('Erro ao listar equipamentos')); // Lança um erro customizado
      })
    );
  }
}
