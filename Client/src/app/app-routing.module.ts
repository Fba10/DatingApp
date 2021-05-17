import { MessagensComponent } from './messagens/messagens.component';
import { ListasComponent } from './listas/listas.component';
import { ListaMembroComponent } from './membros/lista-membro/lista-membro.component';
import { DetalhesMembroComponent } from './membros/detalhes-membro/detalhes-membro.component';
import { MembrosComponent } from './membros/membros.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
   runGuardsAndResolvers: 'always',
   canActivate: [AuthGuard],
  children: [
  {path: 'membros', component: ListaMembroComponent, canActivate: [AuthGuard]},
  {path: 'membros/:id', component: DetalhesMembroComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'mensagens', component: MessagensComponent},
  ]},

  {path: '**', component: HomeComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
