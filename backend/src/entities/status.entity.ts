import moment from "moment";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    StatusName: string;

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