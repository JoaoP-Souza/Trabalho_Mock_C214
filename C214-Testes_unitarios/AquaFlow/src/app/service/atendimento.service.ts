import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Professor } from '../interface/professor.model'; // Import the updated interface

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private mockUrl = 'http://localhost:3000/atendimentos_professores'; // Replace with the actual API URL

  constructor(private http: HttpClient) { }

  getProfessorData(): Observable<any> {
    console.log('Fazendo solicitação HTTP para:', this.mockUrl);
    return this.http.get(this.mockUrl);
  }
}
