import { Body, Controller, Get, Patch, Post, Session, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
    constructor(private usersService: UsersService, private authService: AuthService) { }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto, @Session() session: any) {
        const user = await this.authService.signup(body.email, body.password, body.name, body.surname)
        session.userId = user.id
        return user;
    }

    @Post('/signin')
    async login(@Body() body: SigninUserDto, @Session() session: any) {
        const user = await this.authService.signin(body.email, body.password)
        session.userId = user.id
        return user;
    }

    @Get('/me')
    me(@CurrentUser() user: User) {
        return user;
    }

    @Post('/signout')
    signout(@Session() session: any) {
        session.userId = null;
    }

    @UseGuards(AdminGuard)
    @Patch('/make-admin')
    makeAdmin(@Body() id: number) {
        return this.usersService.makeAdmin(id)
    }

    @UseGuards(AdminGuard)
    @Patch('/remove-admin')
    removeAdmin(@Body() id: number) {
        return this.usersService.removeAdmin(id)
    }

}
