import moment from "moment";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Role {
    ADMIN,
    TEACHER,
    STUDENT
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.STUDENT
    })
    Role: Role;

    @CreateDateColumn()
    CreatedAt: Date;

    @UpdateDateColumn()
    UpdatedAt: Date;

    @BeforeInsert()
    insertCreated() {
        this.CreatedAt = new Date(
            moment().format("YYYY-MM-DD HH:mm:ss")
        );
        this.UpdatedAt = new Date(
            moment().format("YYYY-MM-DD HH:mm:ss")
        );
    }

    @BeforeUpdate()
    insertUpdated() {
        this.UpdatedAt = new Date(
            moment().format("YYYY-MM-DD HH:mm:ss")
        );
    }
}