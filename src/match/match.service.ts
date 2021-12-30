import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './match.entity';

@Injectable()
export class MatchService {
    constructor(@InjectRepository(Match) private repo: Repository<Match>) { }
    createMatch(opponent: string) {
        const match = this.repo.create({ opponent })
        return this.repo.save(match)
    }
}
