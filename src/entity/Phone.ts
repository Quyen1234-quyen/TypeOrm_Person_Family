import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Person } from "./Person";
@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @ManyToOne(()=>Person,person=>person.phone)
    person:Person;
}