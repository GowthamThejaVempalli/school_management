import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from 'src/controllers/students.controller';
import { Student } from 'src/entities/student.entity';
import { StudentsService } from 'src/services/students.service';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [StudentsController],
    providers: [StudentsService]
})
export class StudentsModule {}
