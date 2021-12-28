import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayController } from './play.controller';
import { Play } from './play.entity';
import { PlayService } from './play.service';

@Module({
  imports: [TypeOrmModule.forFeature([Play])],
  controllers: [PlayController],
  providers: [PlayService]
})
export class PlayModule { }
