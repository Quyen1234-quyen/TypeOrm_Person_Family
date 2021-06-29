import {Entity,Column,PrimaryGeneratedColumn, OneToOne,JoinColumn} from 'typeorm';
import {Person} from './Person';

@Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    city:string;

    @Column()

    streetNumber12:string;

    @OneToOne(()=>Person)
    @JoinColumn()
    person:Person;
    
    
}