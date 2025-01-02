import { Component , OnInit } from '@angular/core';
import { AddEquipamentoComponent } from './add-equipamento/add-equipamento.component';
import { CommonModule } from '@angular/common';
import { NavegacaoPrincipalComponent } from '../navegacao-principal/navegacao-principal.component';
import { HeaderComponent } from '../header/header.component';
import { MonitoramentoService } from '../services/monitoramento.service';
import { ListarEquipamentosService } from '../services/listar-equipamentos.service';

@Component({
  selector: 'app-painel-monitor',
  standalone: true,
  imports: [  NavegacaoPrincipalComponent, 
    HeaderComponent, CommonModule ],
  templateUrl: './painel-monitor.component.html',
  styleUrls: ['./painel-monitor.component.scss'],
})
export class PainelMonitorComponent implements OnInit {

  equipamentos: any[] = []; // Array para armazenar os equipamentos
  logs: { [key: number]: any[] } = {};

  constructor(private monitoramentoService: MonitoramentoService,
    private listarEquipamentosService: ListarEquipamentosService
  ) {}
  
  // Método do ciclo de vida chamado após a criação do componente
   ngOnInit(): void {
    console.log("ngOnInit chamado");
    this.carregarMonitoramento();
    this.carregarLogs();
  }

  carregarMonitoramento(): void {
    console.log("carregarMonitoramento chamado");
    this.listarEquipamentosService.listarEquipamentos().subscribe({
      next: (dados) => {
        this.equipamentos = dados;
      },
      error: (erro) => console.error('Erro ao carregar monitoramento:', erro),
    });
  }

  public hoje = new Date()

  carregarLogs(): void {
    this.monitoramentoService.obterLogs(this.hoje, this.hoje).subscribe({
      next: (dados) => {
        // Limpa os logs anteriores
        this.logs = {};
  
        // Filtra e agrupa os logs por equipamento_id
        this.equipamentos.forEach((equipamento) => {
          this.logs[equipamento.id] = dados
            .filter(
              (log: any) =>
                log.equipamento_id === equipamento.id &&
                new Date(log.created_at).toDateString() === this.hoje.toDateString()
            )
            .slice(0, 10); // Pega apenas os últimos 10 registros filtrados
        });
      },
      error: (erro) =>
        console.error('Erro ao carregar logs dos equipamentos:', erro),
    });
  }
  
}
