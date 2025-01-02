import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder , FormGroup , Validators } from '@angular/forms';
import { SolicitarAcessoService } from '../services/solicitar-acesso.service';


@Component({
  selector: 'app-solicitar-acesso',
  standalone: true,
  imports: [ReactiveFormsModule   ],
  templateUrl: './solicitar-acesso.component.html',
  styleUrls: ['./solicitar-acesso.component.scss']
})
export class SolicitarAcessoComponent {

  formularioSolicitacao: FormGroup;



  constructor( private fb: FormBuilder , private solicitarAcessoService: SolicitarAcessoService) {
    this.formularioSolicitacao = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      motivo: ['', Validators.required],
      perfil_solicitado: ['', Validators.required]
    });
  }

  solicitarAcesso() {
    if (this.formularioSolicitacao.valid) {
      const dadosSolicitacao = this.formularioSolicitacao.value;
      this.solicitarAcessoService.solicitarAcesso(dadosSolicitacao).subscribe({
        next: resposta => {
          console.log('Solicitação enviada com sucesso!', resposta);
        },
        error: erro => {
          console.error('Erro ao enviar solicitação:', erro);
        }
      });
    }
  }

}
