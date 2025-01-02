import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { SolicitarAcessoComponent } from '../solicitar-acesso/solicitar-acesso.component';
import { Router } from '@angular/router'; // Importar o Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SolicitarAcessoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formularioLogin: FormGroup;
  exibirLogin = true;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router // Injetar o Router
  ) {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  realizarLogin() {
    if (this.formularioLogin.valid) {
      const dadosLogin = this.formularioLogin.value;
      this.loginService.autenticar(dadosLogin).subscribe({
        next: resposta => {
          console.log('Login bem-sucedido!', resposta);
          this.loginService.salvarToken(resposta.token); // Salva o token no serviço
          localStorage.setItem('expiracao', resposta.expiracao); // Salva a expiração
          this.router.navigate(['/painel']); // Redireciona para a rota do painel
        },
        error: erro => {
          console.error('Erro ao realizar login:', erro);
        }
      });
    }
  }

  alternarTela() {
    this.exibirLogin = !this.exibirLogin;
  }
}
