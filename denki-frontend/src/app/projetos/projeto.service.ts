import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Projeto } from './projeto'

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private url = 'denki-api/projetos'
  private headers = new HttpHeaders().set('Content-Type', 'application/json')

  listarProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.url)
  }

  gravar(projeto: Projeto): Observable<Object> {
    return this.http.post(this.url, projeto, { headers: this.headers })
  }

  excluir(projeto: Projeto): Observable<Object> {
    return this.http.delete(`${this.url}/${projeto.id}`)
  }

  constructor(private http: HttpClient) { }
}
