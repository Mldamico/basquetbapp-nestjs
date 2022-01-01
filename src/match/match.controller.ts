import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { EndMatchDto } from './dto/end-match.dto';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(private matchService: MatchService) { }

    @Post('/create')
    async createMatch(@Body() body: CreateMatchDto) {
        const match = await this.matchService.createMatch(body.opponent)
        return match;
    }

    @Patch('/end/:id')
    async endMatch(@Param('id') id: string, @Body() body: EndMatchDto) {
        const match = await this.matchService.endMatch(+id, body.finalScore, body.opponentFinalScore)
        return match;
    }
}
