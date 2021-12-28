import { Play } from "src/play/play.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class UseOfPlay {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    points: number

    @ManyToOne(() => Play)
    play: Play;

    /* 
        Los nombres de las posiciones son muy distintos en ingles, por lo tanto opte ponerlas en español 
        para no armar confusion.
    */

    @ManyToOne(() => User)
    base: User

    @ManyToOne(() => User)
    escolta: User

    @ManyToOne(() => User)
    alero: User

    @ManyToOne(() => User)
    alaPivot: User

    @ManyToOne(() => User)
    pivot: User
}