import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from './projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private url = 'denki-api/projetos';

  listarProcessos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
