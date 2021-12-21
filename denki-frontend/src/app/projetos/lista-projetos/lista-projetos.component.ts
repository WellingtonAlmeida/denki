import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Projeto } from '../projeto'
import { ProjetoService } from '../projeto.service'

@Component({
  selector: 'denki-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {

  projetos: Projeto[] = []

  constructor(private projetoService: ProjetoService,
    private router: Router) {
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

  abrir(projeto: Projeto): void {
    this.router.navigate(['/projetos/projeto', projeto.id])
  }

  ngOnInit(): void { }

}

