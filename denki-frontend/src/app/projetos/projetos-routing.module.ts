import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaProjetosComponent } from "./lista-projetos/lista-projetos.component";
import { NovoProjetoComponent } from "./novo-projeto/novo-projeto.component";
import { ProjetoComponent } from "./projeto/projeto.component";

const routes: Routes = [
    { path: '', component: ListaProjetosComponent },
    { path: 'novo-projeto', component: NovoProjetoComponent },
    { path: 'projeto/:id', component: ProjetoComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjetosRoutingModule {

}