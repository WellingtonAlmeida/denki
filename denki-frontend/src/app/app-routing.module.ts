import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProjetosComponent } from './projetos/lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './projetos/novo-projeto/novo-projeto.component';

const routes: Routes = [
  { path: 'lista-projetos', component: ListaProjetosComponent },
  { path: 'novo-projeto', component: NovoProjetoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
