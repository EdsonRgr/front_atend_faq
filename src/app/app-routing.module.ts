import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ChamadosComponent } from './pages/chamados/chamados.component';
import { NovoAtendimentoComponent } from './pages/atendimento/novo-atendimento/novo-atendimento.component';
import { NovaDuvidaComponent } from './pages/faq/nova-duvida/nova-duvida.component';
import { DetalhesAtendimentoComponent } from './pages/atendimento/detalhes-atendimento/detalhes-atendimento.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '',component: FaqComponent},
  {path: 'atendimento',component: AtendimentoComponent},
  {path: 'chamados',component: ChamadosComponent},
  {path: 'abrirchamado',component: NovoAtendimentoComponent},
  {path: 'novaDuvida',component: NovaDuvidaComponent},
  {path: 'detalhes/:id',component: DetalhesAtendimentoComponent},
  {path: 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
