import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'denki-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto: any;

  constructor(private route: ActivatedRoute,
    private projetoService: ProjetoService) {
    this.route.params.subscribe(params => this.projetoService.buscarPorId(params['id']).subscribe(projeto => this.projeto = projeto))
  }

  ngOnInit(): void {
  }

}
