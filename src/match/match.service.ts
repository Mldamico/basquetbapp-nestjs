import { Injectable, NotFoundException } from '@nestjs/common';
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

    async endMatch(id: number, finalScore: number, opponentFinalScore: number) {
        const match = await this.repo.findOne(id)
        if (!match) throw new NotFoundException("match not found")
        match.finalScore = finalScore
        match.opponentFinalScore = opponentFinalScore
        return this.repo.save(match)

    }
}
