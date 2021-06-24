import {Entity,Column,PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Person} from './Person';
@Entity()
export class Family{
    @PrimaryGeneratedColumn()
    id:string;
    @Column()
    desc:string;

    @OneToMany(()=>Person,person=>person.family)
    person:Person[];

}