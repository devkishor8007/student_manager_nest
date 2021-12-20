import { Module } from '@nestjs/common';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [StudentsModule],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class AppModule {}
