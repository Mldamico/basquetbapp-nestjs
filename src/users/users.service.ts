import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    create(email: string, password: string, name: string, surname: string) {
        const user = this.repo.create({ email, password, name, surname })
        return this.repo.save(user)
    }

    findOne(id: number) {
        if (!id) return null;
        return this.repo.findOne(id)
    }

    find(email: string) {
        return this.repo.find({ email })
    }

    async makeAdmin(id: number) {
        const user = await this.findOne(id)
        if (!user) throw new NotFoundException('User not found')
        user.isAdmin = true
        this.repo.save(user)
        return true
    }

    async removeAdmin(id: number) {
        const user = await this.findOne(id)
        console.log(id)
        console.log(user)
        if (!user) throw new NotFoundException('User not found')
        user.isAdmin = false
        this.repo.save(user)
        return true
    }


}
