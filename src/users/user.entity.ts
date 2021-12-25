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

    @Column({ default: true })
    isActive: boolean

    @Column({ default: true })
    isAdmin: boolean

    @Column({ default: true })
    isAssistant: boolean

}