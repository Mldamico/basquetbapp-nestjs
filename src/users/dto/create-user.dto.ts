import { IsEmail, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
    @IsEmail()
    @IsOptional()
    email: string;
    @IsString()
    password: string

    @IsString()
    name: string;

    @IsString()
    surname: string;


}