import { Injectable } from '@nestjs/common';
import { StudentDto } from 'src/dto/student.dto';
import { v4 as uuid } from 'uuid';
import { StudentFee, StudentModel } from './students.model';

@Injectable()
export class StudentsService {
  private studnet: StudentModel[] = [];

  getAllStudents(): StudentModel[] {
    return this.studnet;
  }

  getStudentById(id: string): StudentModel {
    return this.studnet.find((stud) => stud.id === id);
  }

  createStudents(dataDto: StudentDto): StudentModel {
    const { name, adress } = dataDto;
    const student: StudentModel = {
      id: uuid(),
      name,
      adress,
      fee: StudentFee.NOT_PAY,
    };
    this.studnet.push(student);
    return student;
  }

  deleteStudent(id: string): void {
    this.studnet = this.studnet.filter((data) => data.id !== id);
  }
}
