export interface StudentModel {
  id: string;
  name: string;
  adress: string;
  fee: StudentFee;
}

export enum StudentFee {
  PAY = 'PAY',
  NOT_PAY = 'NOT_PAY',
  FINE_PAY = 'FINE_PAY',
}
