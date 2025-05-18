import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "src/entities/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private studentRepo: Repository<Student>
    ) {}


}