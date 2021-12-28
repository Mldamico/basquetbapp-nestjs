import { Events } from "src/events/events.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Match {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    opponent: string;

    @Column()
    finalScore: number;

    @Column()
    opponentFinalScore: number;

    @OneToMany(() => Events, (events) => events.match)
    events: Events[]
}