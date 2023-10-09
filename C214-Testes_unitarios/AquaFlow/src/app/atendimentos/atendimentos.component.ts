import { Component, OnInit} from '@angular/core';
import { AtendimentoService } from '../service/atendimento.service';
import { Professor } from '../interface/professor.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-your-component',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentoComponent implements OnInit{
  professors: any[] = [
    {
      "ID": 0,
      "nomeDoProfessor": "Ana Silva",
      "horarioDeAtendimento": { "hours": 10, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 4,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 1,
      "nomeDoProfessor": "Carlos Oliveira",
      "horarioDeAtendimento": { "hours": 23, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": -3,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 2,
      "nomeDoProfessor": "Maria Santos",
      "horarioDeAtendimento": { "hours": 14, "minutes": 45 },
      "periodo": "integral",
      "salaDeAtendimento": 7,
      "predio": [2, 3, 5]
    },
    {
      "ID": 3,
      "nomeDoProfessor": "João Souza",
      "horarioDeAtendimento": { "hours": 9, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 2,
      "predio": [1, 4]
    },
    {
      "ID": 4,
      "nomeDoProfessor": "Isabel Silva",
      "horarioDeAtendimento": { "hours": 13, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 5,
      "predio": [3, 4, 6]
    },
    {
      "ID": 5,
      "nomeDoProfessor": "Luís Fernandes",
      "horarioDeAtendimento": { "hours": 11, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 1,
      "predio": [2, 3, 4]
    },
    {
      "ID": 6,
      "nomeDoProfessor": "Marta Costa",
      "horarioDeAtendimento": { "hours": 16, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 6,
      "predio": [1, 2, 5, 6]
    },
    {
      "ID": 7,
      "nomeDoProfessor": "Pedro Rocha",
      "horarioDeAtendimento": { "hours": 9, "minutes": 45 },
      "periodo": "integral",
      "salaDeAtendimento": 3,
      "predio": [1, 3, 4, 5]
    },
    {
      "ID": 8,
      "nomeDoProfessor": "Sofia Ferreira",
      "horarioDeAtendimento": { "hours": 14, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 8,
      "predio": [2, 4, 6]
    },
    {
      "ID": 9,
      "nomeDoProfessor": "Rui Santos",
      "horarioDeAtendimento": { "hours": 12, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 9,
      "predio": [1, 3, 5]
    }
  ];
  

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {

  }












  mostrarNome(i: number) {
    console.log(this.professors.length);     

    // mostra o nome do professor no índice do array
    if (i < 0 || i >= this.professors.length) {
      return "Professor não encontrado";
    } else {
      return this.professors[i].nomeDoProfessor;
    }
  }
  
  mostrarHorario(i: number) {
    //  console.log(this.professors.length);     
    // mostra o horário do professor no índice do array
    if (i < 0 || i >= this.professors.length) {
      return "Horário não encontrado";
    } else {
      if (this.professors[i].horarioDeAtendimento.hours < 8 || this.professors[i].horarioDeAtendimento.hours > 22) {
        return "Horário está fora do intervalo permitido";
      } else {
        return this.professors[i].horarioDeAtendimento;
      }
    }
  }
  
  mostrarPeriodo(i: number) {
    // mostra o período do professor no índice do array
    if (i < 0 || i >= this.professors.length) {
      return "Período não encontrado";
    } else {
      if (this.professors[i].periodo !== "integral" && this.professors[i].periodo !== "noturno") {
        return "Período não encontrado";
      } else {
        return this.professors[i].periodo;
      }
    }
  }
  
  mostrarPredio(i: number) {
    // mostra a sala do professor no índice do array
    // console.log(i);
    // console.log(this.professors.length);
    // this.definePredio();
    if (i < 0 || i >= this.professors.length) {
      return "Sala não encontrada";
    } else {
if (this.professors[i].salaDeAtendimento <= 0 || this.professors[i].salaDeAtendimento >= 26) {
        return "Sala não encontrada";
      
      } else {
        if(this.professors[i].salaDeAtendimento <=5){
          this.professors[i].predio ==1;
          return this.professors[i].salaDeAtendimento;
        }
        if(this.professors[i].salaDeAtendimento <=10 && this.professors[i].salaDeAtendimento >5){
          this.professors[i].predio ==2;
          return this.professors[i].salaDeAtendimento;
        }
        if(this.professors[i].salaDeAtendimento <=15 && this.professors[i].salaDeAtendimento >10){
          this.professors[i].predio ==3;
          return this.professors[i].salaDeAtendimento;
        }
        if(this.professors[i].salaDeAtendimento <=20 && this.professors[i].salaDeAtendimento >15){ 
          this.professors[i].predio ==4;
          return this.professors[i].salaDeAtendimento;
        }
        if(this.professors[i].salaDeAtendimento <=25 && this.professors[i].salaDeAtendimento >20){
          this.professors[i].predio ==6;
          return this.professors[i].salaDeAtendimento;
        }
      }
    }
  }
}

