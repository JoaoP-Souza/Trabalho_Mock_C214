import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Professor } from '../interface/professor.model';


@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {

  private mockData =[

    [
      {
        "ID": 0,
        "nomeDoProfessor": "Ana Silva",
        "horarioDeAtendimento": { "hours": 10, "minutes": 30 },
        "periodo": "integral",
        "salaDeAtendimento": 4,
        "predio": [
          1,
          2,
          3,
          4,
          6
        ]
      },
      {
        "ID": 1,
        "nomeDoProfessor": "Carlos Oliveira",
        "horarioDeAtendimento": { "hours": 23, "minutes": 0 },
        "periodo": "manha",
        "salaDeAtendimento": -3,
        "predio": [
                    1,
                    2,
                    3,
                    4,
                    6
                  ]
      }
  
    ]

  ]


  constructor(private http: HttpClient) {}


  
  getProfessorData(){

    return this.mockData;
    
  }
}