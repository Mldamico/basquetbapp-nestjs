import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { CreatePlayDto } from './dto/create-play.dto';
import { UpdatePlayDto } from './dto/update-play.dto';
import { PlayService } from './play.service';

@Controller('play')
export class PlayController {
    constructor(private playService: PlayService) { }

    @UseGuards(AdminGuard)
    @Post('/create')
    async createPlay(@Body() body: CreatePlayDto) {
        const play = await this.playService.createPlay(body.name, body.url)
        return play;
    }

    @Get()
    getPlays() {
        return this.playService.getPlays()
    }

    @UseGuards(AdminGuard)
    @Patch('/activate/:id')
    async activatePlay(@Param('id') id: string) {
        const play = await this.playService.activatePlay(+id)
        return play
    }

    @UseGuards(AdminGuard)
    @Patch('/disable/:id')
    disablePlay(@Param('id') id: string) {
        return this.playService.disablePlay(+id)
    }

    @UseGuards(AdminGuard)
    @Patch('/update/:id')
    updatePlay(@Param('id') id: string, @Body() body: UpdatePlayDto) {
        return this.playService.updatePlay(+id, body);
    }
}
