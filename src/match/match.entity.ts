import { Events } from "src/events/events.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Match {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    date: Date

    @Column()
    opponent: string;

    @Column({ nullable: true })
    finalScore: number;

    @Column({ nullable: true })
    opponentFinalScore: number;

    @OneToMany(() => Events, (events) => events.match, { nullable: true })
    events: Events[]
}