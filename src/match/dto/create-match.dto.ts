import { IsString } from "class-validator";

export class CreateMatchDto {


    @IsString()
    opponent: string;

}