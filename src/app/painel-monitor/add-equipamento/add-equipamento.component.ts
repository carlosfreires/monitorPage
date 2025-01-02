import { Component } from '@angular/core';
import { CadastrarEquipamentoService } from '../../services/cadastrar-equipamento.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-equipamento',
  standalone: true,
  imports: [ FormsModule, ],
  templateUrl: './add-equipamento.component.html',
  styleUrl: './add-equipamento.component.scss'
})
export class AddEquipamentoComponent {

  equipamento = {
    nome: '',
    descricao: '',
    mac: '',
    ip: '',
    porta: null,
    tipo_teste: '',
  };

  constructor(private cadastrarEquipamentoService: CadastrarEquipamentoService) {}

  onSubmit() {
    if (
      this.equipamento.nome &&
      this.equipamento.descricao &&
      this.equipamento.mac &&
      this.equipamento.ip &&
      this.equipamento.porta &&
      this.equipamento.tipo_teste
    ) {
      this.cadastrarEquipamentoService
        .cadastrarEquipamento(this.equipamento)
        .subscribe({
          next: () => {
            alert('Equipamento cadastrado com sucesso!');
            this.equipamento = {
              nome: '',
              descricao: '',
              mac: '',
              ip: '',
              porta: null,
              tipo_teste: '',
            };
          },
          error: (err) => {
            console.error('Erro ao cadastrar equipamento:', err);
            alert('Erro ao cadastrar equipamento.');
          },
        });
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
