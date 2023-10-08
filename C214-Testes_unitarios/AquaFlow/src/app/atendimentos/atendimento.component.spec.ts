import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { AtendimentoService } from '../service/atendimento.service';
import { AtendimentoComponent } from './atendimentos.component';

describe('AtendimentoComponent', () => {
  let component: AtendimentoComponent;
  let fixture: ComponentFixture<AtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtendimentoComponent],
      imports: [MatDialogModule, HttpClientModule, HttpClientTestingModule],
      providers: [AtendimentoService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should return Professor não encontrado for invalid index', () => {
    const invalidIndex = -2;
    const result = component.mostrarNome(invalidIndex);
    expect(result).toBe('Professor não encontrado');
  });
  // it('deve verificar se o erro correspondente está sendo retornado para uma sala inválida', () => {
  //   const index = 1;
  //   const result = component.mostrarSala(3);
  //   console.log(result);
  //   expect(result).toBe('Sala não encontrada');
  // });




  // it('deve verificar se o erro correspondente está sendo retornado para um predio inválido', () => {
  //   const index = 15;
  //   const result = component.mostrarPredio(index);
  //   expect(result).toBe('Prédio não encontrado');
  // });


  // it('deve verificar se o nome do professor correspondente esta sendo retornado corretamente', () => {
  //   const index = 0;
  //   const result = component.mostrarNome(index);
  //   expect(result).toBe('Ana Silvia');
  // });

  // it('deve verificar se o erro correspondente está sendo retornado para um professor não existente', () => {
  //   const index = 3;
  //   const result = component.mostrarNome(index);
  //   expect(result).toBe('Professor não encontrado');
  // });

  // it('deve verificar se o erro correspondente está sendo retornado para um periodo invalido', () => {
  //   const index = 2;
  //   const result = component.mostrarPredio(index);
  //   expect(result).toBe('Período não encontrado');
  // });

  // it('deve verificar se o periodo de atendimento esta sendo retornado corretamente', () => {
  //   const index = 0;
  //   const result = component.mostrarPeriodo(index);
  //   expect(result).toBe('integral');
  // });

  // it('deve verificar se o periodo de atendimento esta sendo retornado corretamente', () => {
  //   const index = 0;
  //   const result = component.mostrarPeriodo(index);
  //   expect(result).toBe('integral');
  // });

  // it('deve verificar se a sala de atendimento esta sendo retornada corretamente', () => {
  //   const index = 0;
  //   const result = component.mostrarSala(index);
  //   expect(result).toBe(4);
  // });


  // it('deve verificar se a sala de atendimento está sendo retornada corretamente para outra sala', () => {
  //   const index = 3;
  //   const result = component.mostrarSala(index);
  //   expect(result).toBe(3);
  // });

  
  // it('deve verificar se o erro correspondente está sendo retornado para um período inexistente', () => {
  //   const index = 5;
  //   const result = component.mostrarPeriodo(index);
  //   expect(result).toBe('Período não encontrado');
  // });

  // it('deve verificar se o erro correspondente está sendo retornado para uma sala inexistente', () => {
  //   const index = 10;
  //   const result = component.mostrarSala(index);
  //   expect(result).toBe('Sala não encontrada');
  // });
  
  // it('deve verificar se o erro correspondente está sendo retornado para um professor inexistente', () => {
  //   const index = 5;
  //   const result = component.mostrarNome(index);
  //   expect(result).toBe('Professor não encontrado');
  // });
  
  // Add more test cases for mostrarNome as needed





});
