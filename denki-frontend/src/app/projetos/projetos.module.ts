import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { ProjetoService } from './projeto.service';



@NgModule({
  declarations: [
    ListaProjetosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProjetoService
  ]
})
export class ProjetosModule { }
