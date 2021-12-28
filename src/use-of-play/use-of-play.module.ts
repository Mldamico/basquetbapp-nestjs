import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UseOfPlayController } from './use-of-play.controller';
import { UseOfPlay } from './use-of-play.entity';
import { UseOfPlayService } from './use-of-play.service';

@Module({
  imports: [TypeOrmModule.forFeature([UseOfPlay])],
  controllers: [UseOfPlayController],
  providers: [UseOfPlayService]
})
export class UseOfPlayModule { }
