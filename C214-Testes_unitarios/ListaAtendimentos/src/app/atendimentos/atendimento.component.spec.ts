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
  
  
  it('deve retornar Professor não encontrado, para index invalido', () => {
      const invalidIndex = -2000;
      const result = component.mostrarNome(invalidIndex);
      expect(result).toBe('Professor não encontrado');
    
    });
    
    it('deve verificar se o erro correspondente está sendo retornado para um horário inavlido', () => {
      const index = 18;
      const result = component.mostrarHorario(index);
      expect(result).toBe('Horário está fora do intervalo permitido');
    });
    
     it('deve verificar se o erro correspondente está sendo retornado para um predio inválido', () => {
       const index = 150;
       const result = component.mostrarPredio(index);
       expect(result).toBe('Prédio não encontrado');
     });

    it('deve verificar se o erro correspondente está sendo retornado para uma sala inválida', () => {
      const index = 17;
      const result = component.mostrarSala(index);
      console.log(result);
      expect(result).toBe('Sala não encontrada');
    });

  
    it('deve verificar se o nome do professor correspondente esta sendo retornado corretamente', () => {
      const index = 0;
      const result = component.mostrarNome(index);
      expect(result).toBe('Ana Silva');
    });

    it('deve verificar se o erro correspondente está sendo retornado para um professor não existente', () => {
      const index = 33;
      const result = component.mostrarNome(index);
      expect(result).toBe('Professor não encontrado');
    });

    it('deve verificar se o erro correspondente está sendo retornado para uma sala inexistente', () => {
      const index = 99;
      const result = component.mostrarSala(index);
      expect(result).toBe('Sala não encontrada');
    });
    
    it('deve verificar se o erro correspondente está sendo retornado para um professor inexistente', () => {
      const index =14;
      const result = component.mostrarNome(index);
      expect(result).toBe('Professor não encontrado');
     });
    
    it('deve verificar se o erro correspondente está sendo retornado para um professor inexistente', () => {
      const index = 12;
      const result = component.mostrarNome(index);
      expect(result).toBe('Professor não encontrado');
    });

    it('deve verificar se o erro correspondente está sendo retornado para uma sala inexistente', () => {
       const index = 99;
       const result = component.mostrarSala(index);
       expect(result).toBe('Sala não encontrada');
     });
  
  it('deve verificar se o prédio 1 está sendo retornado pra sala em questão', () => {
    const Index = 6;
    const result = component.mostrarPredio(Index);
    expect(result).toBe(1);
  });

  it('deve verificar se o prédio 6 está sendo retornado pra sala em questão', () => {
    const Index = 7;
    const result = component.mostrarPredio(Index);
    expect(result).toBe(6);
  });

  it('deve verificar se o prédio 6 está sendo retornado pra sala em questão', () => {
    const Index = 9;
    const result = component.mostrarPredio(Index);
    expect(result).toBe(2);
  });

  it('deve verificar se o prédio correto está sendo retornado pra sala em questão', () => {
    const Index = 6;
    const result = component.mostrarPredio(Index);
    expect(result).toBe(1);
  });

  it('deve verificar se o prédio correto está sendo retornado pra sala em questão', () => {
    const Index = 6;
    const result = component.mostrarPredio(Index);
    expect(result).toBe(1);
  });
  

  
  it('deve verificar se est[a retornando o horario certo para o professor em questão', () => {
    const validIndex = 8;
    const result = component.mostrarHorario(validIndex);
    expect(result).toBe('14:30');
  });
  
  it('deve verificar se o nome correto está sendo exibido para o professor', () => {
    const validIndex = 4;
    const result = component.mostrarNome(validIndex);
    expect(result).toBe('Isabel Silva');
  });
  
  it('deve verificar se o período em que o professor atende é válido', () => {
    const validIndex = 5;
    const result = component.mostrarPeriodo(validIndex);
    expect(result).toBe('integral');
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
  
  it('deve verificar se a sala de atendimento está sendo retornada corretamente para outra sala', () => {
    const index = 3;
    const result = component.mostrarSala(index);
    expect(result).toBe(2);
  });

});
