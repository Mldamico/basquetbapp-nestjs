import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UseOfPlay } from './use-of-play.entity';

@Injectable()
export class UseOfPlayService {
    constructor(@InjectRepository(UseOfPlay) private repo: Repository<UseOfPlay>) { }

    createUseOfPlay(points: number, play: number, base: number, escolta: number, alero: number, alaPivot: number, pivot: number) {
        const useOfPlay = this.repo.create({ points, play, base, escolta, alero, alaPivot, pivot })
        return this.repo.save(useOfPlay)
    }
}
