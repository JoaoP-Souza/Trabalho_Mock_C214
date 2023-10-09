export interface Professor {
    ID: number;
    nomeDoProfessor: string;
    horarioDeAtendimento: {
      hours: number;
      minutes: number;
    };
    periodo: string;
    salaDeAtendimento: number;
    predio: [];
  }
  