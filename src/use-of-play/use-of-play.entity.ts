import { Play } from "src/play/play.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class UseOfPlay {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    points: number

    @Column()
    play: number;

    /* 
        Los nombres de las posiciones son muy distintos en ingles, por lo tanto opte ponerlas en español 
        para no armar confusion.
    */

    @Column()
    base: number

    @Column()
    escolta: number

    @Column()
    alero: number

    @Column()
    alaPivot: number

    @Column()
    pivot: number
}