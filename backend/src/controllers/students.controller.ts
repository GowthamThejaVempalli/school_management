import { Controller } from "@nestjs/common";
import { StudentsService } from "src/services/students.service";

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}
}