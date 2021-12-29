import { IsOptional, IsString } from "class-validator";


export class UpdatePlayDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsOptional()
    @IsString()
    url: string;
}