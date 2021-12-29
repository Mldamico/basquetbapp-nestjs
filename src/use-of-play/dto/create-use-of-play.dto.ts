import { IsNumber } from "class-validator";


export class CreateUseOfPlayDto {


    @IsNumber()
    points: number

    @IsNumber()
    play: number;

    @IsNumber()
    base: number
    @IsNumber()
    escolta: number
    @IsNumber()
    alero: number
    @IsNumber()
    alaPivot: number
    @IsNumber()
    pivot: number
}