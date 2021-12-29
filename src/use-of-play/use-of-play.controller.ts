import { Body, Controller, Post } from '@nestjs/common';
import { CreateUseOfPlayDto } from './dto/create-use-of-play.dto';
import { UseOfPlayService } from './use-of-play.service';

@Controller('use-of-play')
export class UseOfPlayController {
    constructor(private useOfPlayService: UseOfPlayService) { }

    @Post('/create')
    async createUseOfPlay(@Body() body: CreateUseOfPlayDto) {
        const useOfPlay = await this.useOfPlayService.createUseOfPlay(body.points, body.play, body.base, body.escolta, body.alero, body.alaPivot, body.pivot);
        return useOfPlay;
    }
}
