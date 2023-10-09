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
      "horarioDeAtendimento": { "hours": 13, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 7,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 2,
      "nomeDoProfessor": "Maria Santos",
      "horarioDeAtendimento": { "hours": 14, "minutes": 45 },
      "periodo": "desnatado",
      "salaDeAtendimento": 7,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 3,
      "nomeDoProfessor": "João Souza",
      "horarioDeAtendimento": { "hours": 9, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 2,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 4,
      "nomeDoProfessor": "Isabel Silva",
      "horarioDeAtendimento": { "hours": 13, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 5,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 5,
      "nomeDoProfessor": "Luís Fernandes",
      "horarioDeAtendimento": { "hours": 11, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 1,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 6,
      "nomeDoProfessor": "Marta Costa",
      "horarioDeAtendimento": { "hours": 16, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 4,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 7,
      "nomeDoProfessor": "Pedro Rocha",
      "horarioDeAtendimento": { "hours": 9, "minutes": 45 },
      "periodo": "integral",
      "salaDeAtendimento": 24,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 8,
      "nomeDoProfessor": "Sofia Ferreira",
      "horarioDeAtendimento": { "hours": 14, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 8,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 9,
      "nomeDoProfessor": "Rui Santos",
      "horarioDeAtendimento": { "hours": 12, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 9,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 10,
      "nomeDoProfessor": "Ana Silva",
      "horarioDeAtendimento": { "hours": 10, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 4,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 11,
      "nomeDoProfessor": "Carlos Oliveira",
      "horarioDeAtendimento": { "hours": 14, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": -3,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 12,
      "nomeDoProfessor": "",
      "horarioDeAtendimento": { "hours": 14, "minutes": 45 },
      "periodo": "integral",
      "salaDeAtendimento": 7,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 13,
      "nomeDoProfessor": "João Souza",
      "horarioDeAtendimento": { "hours": 9, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 2,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 14,
      "nomeDoProfessor": "",
      "horarioDeAtendimento": { "hours": 13, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 5,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 15,
      "nomeDoProfessor": "Luís Fernandes",
      "horarioDeAtendimento": { "hours": 11, "minutes": 30 },
      "periodo": "integral",
      "salaDeAtendimento": 1,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 16,
      "nomeDoProfessor": "Marta Costa",
      "horarioDeAtendimento": { "hours": 16, "minutes": 15 },
      "periodo": "integral",
      "salaDeAtendimento": 6,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 17,
      "nomeDoProfessor": "Pedro Rocha",
      "horarioDeAtendimento": { "hours": 9, "minutes": 45 },
      "periodo": "integral",
      "salaDeAtendimento": 2077,
      "predio": [1,2 , 3, 4, 6]
    },
    {
      "ID": 18,
      "nomeDoProfessor": "Sofia Ferreira",
      "horarioDeAtendimento": { "hours": 23, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 8,
      "predio": [1, 2, 3, 4, 6]
    },
    {
      "ID": 19,
      "nomeDoProfessor": "",
      "horarioDeAtendimento": { "hours": 12, "minutes": 0 },
      "periodo": "integral",
      "salaDeAtendimento": 9,
      "predio": [1, 2, 3, 4, 6]
    }

  ];
  

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    //simulando a injeção de dependência, não fizemos por causa da atribuicao abaixo nao estar funcionando
//ela viria do arquivo atendimento.service.ts na pasta services, o mock de dados está no arquivo atendimentos_professores.json
    // this.atendimentoService.getProfessors().subscribe(
    //   (response: any) => {
    //     this.professors = response;
    //     console.log(this.professors);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );

  }

  mostraLista() {
      for(let i = 0; i < this.professors.length; i++) {
        console.log(this.professors[i].nomeDoProfessor);
        console.log(this.mostrarNome(i));
        console.log(this.mostrarHorario(i));
        console.log(this.mostrarPredio(i));
        console.log(this.mostrarSala(i));
        console.log(this.mostrarPeriodo(i));
      }
    }

  mostrarNome(i: number) {
    console.log(this.professors.length);     

    // mostra o nome do professor no índice do array
    if (i < 0 || i >= this.professors.length || this.professors[i].nomeDoProfessor == "") {
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
        return this.professors[i].horarioDeAtendimento.hours + ":" + this.professors[i].horarioDeAtendimento.minutes;
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

  mostrarSala(i: number) {
    // mostra a sala do professor no índice do array
    if (i < 0 || i >= this.professors.length) {
      return "Sala não encontrada";
    } else {
      if (this.professors[i].salaDeAtendimento <= 0 || this.professors[i].salaDeAtendimento >= 26) {
        return "Sala não encontrada";
      } else {
        return this.professors[i].salaDeAtendimento;
      }
    }
  }
  
  mostrarPredio(i: number) {

    if (i < 0 || i >= this.professors.length) {
      return "Prédio não encontrado";
    } else {
if (this.professors[i].salaDeAtendimento <= 0 || this.professors[i].salaDeAtendimento >= 26) {
        return "Prédio não encontrado";
      
      } else {
        if(this.professors[i].salaDeAtendimento <=5){
          const pred = this.professors[i].predio[0];
          return pred;
        }
        if(this.professors[i].salaDeAtendimento <=10 && this.professors[i].salaDeAtendimento >5){
          const pred = this.professors[i].predio[1];
          return pred;
          
        }
        if(this.professors[i].salaDeAtendimento <=15 && this.professors[i].salaDeAtendimento >10){
          const pred = this.professors[i].predio[2];
          return pred;
        }
        if(this.professors[i].salaDeAtendimento <=20 && this.professors[i].salaDeAtendimento >15){ 
          const pred = this.professors[i].predio[3];
          return pred;
        }
        if(this.professors[i].salaDeAtendimento <=25 && this.professors[i].salaDeAtendimento >20){
          const pred = this.professors[i].predio[4];
          return pred;
        }
      }
    }
  }
}

