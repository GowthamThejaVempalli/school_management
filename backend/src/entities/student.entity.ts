import moment from "moment";
import { AfterLoad, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "./status.entity";
import { Class } from "./class.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column({ type: "timestamp" })
    DateOfBirth: Date;

    @Column()
    Gender: string;

    @OneToOne(type => Status)
    @JoinColumn({ name: "StatusID" })
    Status: Status;

    StatusID: number;

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

    FullName: string;

    @AfterLoad()
    setFullName() {
        this.FullName = this.FirstName.concat(" ", this.LastName);
    }
}