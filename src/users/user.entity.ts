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

    @Column({ nullable: true })
    number: number;

    @Column({ nullable: true })
    height: number;

    @Column({ default: true })
    isActive: boolean

    @Column({ default: false })
    isAdmin: boolean

    @Column({ default: false })
    isAssistant: boolean


}