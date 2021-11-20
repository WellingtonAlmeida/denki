import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'denki-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css'],
})
export class NovoProjetoComponent implements OnInit {

  descricao: string = ''

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void { }

  gravar() {
    const projeto: Projeto = { descricao: this.descricao }
    console.log(JSON.stringify(projeto))
    this.projetoService.gravar(projeto).subscribe(() => console.log('Projeto gravado'))
    this.limparFormulario()
  }

  limparFormulario(): void {
    this.descricao = ''
  }
}
