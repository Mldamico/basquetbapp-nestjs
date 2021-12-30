import { Body, Controller, Post } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(private matchService: MatchService) { }

    @Post('/create')
    async createMatch(@Body() body: CreateMatchDto) {
        const match = await this.matchService.createMatch(body.opponent)
        return match;
    }
}
