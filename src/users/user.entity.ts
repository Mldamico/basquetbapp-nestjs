import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    password: string;

    @Column()
    isActive: boolean

    @Column()
    isAdmin: boolean

    @Column()
    isAssistant: boolean

}