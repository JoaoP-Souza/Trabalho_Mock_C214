import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../service/atendimento.service';
import { Professor } from '../interface/professor.model';
import { HttpErrorResponse } from '@angular/common/http'; // Import HttpErrorResponse

@Component({
  selector: 'app-your-component',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.css']
})
export class AtendimentoComponent implements OnInit {
  // Add a new property to hold the professor data
  professors: any;

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
    this.atendimentoService.getProfessorData().subscribe(data => {
      this.professors = data;
      console.log(this.professors);
    });
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
     console.log(this.professors.length);     
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
  
  mostrarSala(i: number) {
    // mostra a sala do professor no índice do array
    console.log(i);
    console.log(this.professors.length);
    // this.definePredio();
    if (i < 0 || i >= this.professors.length) {
      return "Sala não encontrada";
    } else {
if (this.professors[i].salaDeAtendimento <= 0 || this.professors[i].salaDeAtendimento >= 26) {
        return "Sala não encontrada";
      
      } else {
        console.log(this.professors[i].salaDeAtendimento);
        return this.professors[i].salaDeAtendimento;
      }
    }
  }
  
  mostrarPredio(i: number) {
    console.log(i);

    if (i < 0 || i >= this.professors.length) {
      return "Prédio não encontrado";
    } else {
      if (this.professors[i].predio == null) { 
        return "Prédio não encontrado";
      } else {
        return this.professors[i].predio;
      }
    }
  }


  // private updateImages() {
  //   // Assuming you want to calculate an image based on sensor data
  //   console.log( this.vazoes ); // pegar o index e fazer .valor

  //   for (let v of this.vazoes) {
  //     if (v.valor <= 100) {
  //       v.imageUrl = 'assets/images/pipe-leak-v3.png'; // Display Image 1
  //       v.status = 'Há um problema com o encanamento neste sensor!';
  //     } else {
  //       v.imageUrl = 'assets/images/pipe-normal-v3.png'; // Display Image 2
  //       v.status = 'Não há problemas com o encanamento neste sensor!';
  //     }
  //   }
  // }



  //     openModal(): void {
  //       // Set the width and height for the modal
  //       const dialogConfig = new MatDialogConfig();
  //       dialogConfig.width = '500px';
  //       dialogConfig.height = '300px';
  //       const dialogRef = this.dialog.open(DisplayModalComponent, dialogConfig);
  //     }

  }

