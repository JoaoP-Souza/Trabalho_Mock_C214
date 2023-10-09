import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Professor } from '../interface/professor.model';


@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {

  private readonly URI = 'http://localhost:3000/atendimentos_professores';

  constructor(private http: HttpClient) {}
  
  getVazoesCorrentes(): Observable<Professor[]> {
    return this.http.get<Professor[]>( this.URI );
  }
}