import { Component, OnInit } from '@angular/core'
import { Projeto } from '../projeto'
import { ProjetoService } from '../projeto.service'

@Component({
  selector: 'denki-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

  projetos: Projeto[] = []

  constructor(private projetoService: ProjetoService) {
    this.projetoService.listarProjetos().subscribe(projetos => this.projetos = projetos)
  }

  excluir(projeto: Projeto): void {
    const resposta = confirm(`Deseja realmente excluir o projeto ${projeto.descricao}?`)
    if (resposta) {
      this.projetoService.excluir(projeto).subscribe(() => {
        const node = document.getElementById(`${projeto.id}`)
        node?.remove()
      })
    }
  }

  ngOnInit(): void { }

}

