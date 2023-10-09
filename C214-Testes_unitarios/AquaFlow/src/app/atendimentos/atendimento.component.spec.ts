import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtendimentoComponent } from './atendimentos.component';
import { AtendimentoService } from '../service/atendimento.service';
import { Professor } from '../interface/professor.model';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
    const invalidIndex = -2000;
    const result = component.mostrarNome(invalidIndex);
    expect(result).toBe('Professor não encontrado');

  });

  it('deve verificar se o erro correspondente está sendo retornado para uma sala inválida', () => {
    const index = 1;
    const result = component.mostrarSala(3);
    console.log(result);
    expect(result).toBe('Sala não encontrada');
  });




  // it('deve verificar se o erro correspondente está sendo retornado para um predio inválido', () => {
  //   const index = 15;
  //   const result = component.mostrarPredio(index);
  //   expect(result).toBe('Prédio não encontrado');
  // });

  it('deve verificar se o nome do professor correspondente esta sendo retornado corretamente', () => {
    const index = 0;
    const result = component.mostrarNome(index);
    expect(result).toBe('Ana Silvia');
  });

  it('deve verificar se o erro correspondente está sendo retornado para um professor não existente', () => {
    const index = 3;
    const result = component.mostrarNome(index);
    expect(result).toBe('Professor não encontrado');
  });

  it('deve verificar se o erro correspondente está sendo retornado para um periodo invalido', () => {
    const index = 2;
    const result = component.mostrarPredio(index);
    expect(result).toBe('Período não encontrado');
  });

  it('deve verificar se o periodo de atendimento esta sendo retornado corretamente', () => {
    const index = 0;
    const result = component.mostrarPeriodo(index);
    expect(result).toBe('integral');
  });

  it('deve verificar se o periodo de atendimento esta sendo retornado corretamente', () => {
    const index = 0;
    const result = component.mostrarPeriodo(index);
    expect(result).toBe('integral');
  });

  it('deve verificar se a sala de atendimento esta sendo retornada corretamente', () => {
    const index = 0;
    const result = component.mostrarSala(index);
    expect(result).toBe(4);
  });




  // Add more test cases for mostrarNome as needed
});
