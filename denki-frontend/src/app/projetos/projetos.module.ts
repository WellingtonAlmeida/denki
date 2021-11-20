import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { ProjetoService } from './projeto.service';

@NgModule({
  declarations: [
    ListaProjetosComponent,
    NovoProjetoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProjetoService
  ]
})
export class ProjetosModule { }
