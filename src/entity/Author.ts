import {Entity,Column,PrimaryGeneratedColumn,ManyToMany,JoinColumn} from 'typeorm';
import { Book } from './Book';
@Entity()

export class Author{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    authorName:string;

    @ManyToMany(()=>Book)
    @JoinColumn()
    book:Book[];
}
