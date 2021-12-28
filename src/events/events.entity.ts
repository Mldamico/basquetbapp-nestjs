import { Match } from "src/match/match.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Events {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    time: string;

    @ManyToOne(() => Match, (match) => match.events)
    match: Match
}