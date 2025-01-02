import { Component , OnInit } from '@angular/core';
import { ListarEquipamentosService } from '../../services/listar-equipamentos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-equipamentos',
  imports: [CommonModule],
  templateUrl: './lista-equipamentos.component.html',
  styleUrl: './lista-equipamentos.component.scss'
})
export class ListaEquipamentosComponent implements OnInit {

  equipamentos: any[] = []; // Array para armazenar os equipamentos
  errorMessage: string | null = null;  //Variável para armazenar mensagens de erro

  constructor( private listarEquipamentosService: ListarEquipamentosService){}
  
  // Método do ciclo de vida chamado após a criação do componente
  ngOnInit(): void {
    this.carregarEquipamentos(); // Chamar o método para carregar os equipamentos
  }

  carregarEquipamentos(): void {
    this.listarEquipamentosService.listarEquipamentos().subscribe({
      next: (data) => {
        this.equipamentos = data; //Salvar os equipamentos retornados
        this.errorMessage = null; // Limpar mensagens de erro
      },
      error: (erro) => {
        console.error('Erro ao carregar equipamentos:', erro);
        this.errorMessage = 'Erro ao carregar equipamentos. Tente novamente mais tarde.';
      }
    })

  }


}

