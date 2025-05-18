import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Class } from "./class.entity";
import moment from "moment";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Name: string;

    @ManyToOne(type => Class)
    @JoinColumn({ name: "ClassID" })
    Class: Class;

    ClassID: number

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