import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import { Phone } from './Phone';
import { Family } from "./Family";
@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(() => Phone, phone => phone.person)
    phone: Phone[];

    @ManyToOne(()=>Family,family=>family.person)
    family:Family;
}
