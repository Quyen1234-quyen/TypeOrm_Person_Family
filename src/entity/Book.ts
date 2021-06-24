import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book{
    @PrimaryGeneratedColumn() 
    id:string;

    @Column()
    name:string;


}