import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Play } from './play.entity';

@Injectable()
export class PlayService {
    constructor(@InjectRepository(Play) private repo: Repository<Play>) { }

    createPlay(name: string, url: string) {
        const play = this.repo.create({ name, url });
        return this.repo.save(play)
    }

    getPlays() {
        const plays = this.repo.find({ isActive: true })
        return plays;
    }

    async activatePlay(id: number) {
        if (!id) return null;
        const play = await this.repo.findOne(id)
        if (!play) throw new NotFoundException('play not found');
        play.isActive = true
        return this.repo.save(play)
    }

    async disablePlay(id: number) {
        if (!id) return null;
        const play = await this.repo.findOne(id)
        if (!play) throw new NotFoundException('play not found');
        play.isActive = false
        return this.repo.save(play)
    }
}
