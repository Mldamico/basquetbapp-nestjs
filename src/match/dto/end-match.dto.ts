import { IsNumber } from "class-validator";


export class EndMatchDto {

    @IsNumber()
    finalScore: number;

    @IsNumber()
    opponentFinalScore: number;

}