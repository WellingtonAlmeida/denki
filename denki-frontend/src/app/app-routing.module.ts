import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProjetosComponent } from './projetos/lista-projetos/lista-projetos.component';

const routes: Routes = [
  {path:'lista-projetos', component: ListaProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
