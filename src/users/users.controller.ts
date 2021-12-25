import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService, private authService: AuthService) { }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto) {
        const user = await this.authService.signup(body.email, body.password, body.name, body.surname)
        return user;
    }

    @Post('signin')
    async login(@Body() body: SigninUserDto) {
        const user = await this.authService.signin(body.email, body.password)
        return user;
    }

}
