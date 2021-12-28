import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Play {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column({ default: true })
    isActive: boolean
}