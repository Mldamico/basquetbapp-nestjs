import { IsBoolean, IsString } from "class-validator";

export class CreatePlayDto {
    @IsString()
    name: string;
    @IsString()
    url: string;
}