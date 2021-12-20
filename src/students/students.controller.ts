import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentDto } from 'src/dto/student.dto';
import { StudentModel } from './students.model';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentRecord: StudentsService) {}

  @Get()
  getStudents(): StudentModel[] {
    return this.studentRecord.getAllStudents();
  }

  @Post()
  createStudentRecord(@Body() studentdto: StudentDto) {
    return this.studentRecord.createStudents(studentdto);
  }

  @Delete('/:id')
  deleteStudentRecord(@Param('id') id: string) {
    return this.studentRecord.deleteStudent(id);
  }
}
