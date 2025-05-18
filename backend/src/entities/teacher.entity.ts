import { AfterLoad, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Subject } from "./subject.entity";
import { Class } from "./class.entity";
import { Status } from "./status.entity";
import moment from "moment";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @ManyToOne(type => Subject)
    @JoinColumn({ name:"SubjectID" })
    Subject: Subject;

    SubjectID: number;

    @OneToOne(type => Status)
    @JoinColumn({ name: "StatusID" })
    Status: Status;

    StatusID: number;

    @ManyToOne(type => Class)
    @JoinColumn({ name: "ClassID" })
    Class: Class;

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

    FullName: string;

    @AfterLoad()
    setFullName() {
        this.FullName = this.FirstName.concat(" ", this.LastName);
    }
}