import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SolicitarAcessoComponent } from './solicitar-acesso/solicitar-acesso.component';
import { PainelMonitorComponent } from './painel-monitor/painel-monitor.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
 // { path: 'app', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, //rota raiz
  { path: 'solicitar-acesso', component: SolicitarAcessoComponent },
  { path: 'painel', component: PainelMonitorComponent, canActivate: [AuthGuard] }, // Protegido
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login como padrão
  { path: '**', redirectTo: 'login' } // Rota coringa
];
