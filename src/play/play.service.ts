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

    findOne(id: number) {
        if (!id) {
            return null;
        }

        return this.repo.findOne(id)
    }

    async activatePlay(id: number) {
        const play = await this.findOne(id)
        if (!play) throw new NotFoundException('play not found');
        play.isActive = true
        return this.repo.save(play)
    }

    async disablePlay(id: number) {
        const play = await this.findOne(id)
        if (!play) throw new NotFoundException('play not found');
        play.isActive = false
        return this.repo.save(play)
    }

    async updatePlay(id: number, attrs: Partial<Play>) {
        const play = await this.findOne(id);
        if (!play) throw new NotFoundException('play not found');
        Object.assign(play, attrs)
        return this.repo.save(play)
    }

}
