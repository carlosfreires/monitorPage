import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const expiracao = localStorage.getItem('expiracao');

    if (token && expiracao) {
      const agora = new Date();
      const dataExpiracao = new Date(expiracao);

      if (dataExpiracao > agora) {
        return true; // Token válido, permitir acesso
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('expiracao');
      }
    }

    // Redireciona para login com uma mensagem de erro
    this.router.navigate(['/login'], { queryParams: { session: 'expired' } });
    return false;
  }
}