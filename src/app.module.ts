import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Team } from './team/team.entity';
import { Events } from './events/events.entity';
import { MatchModule } from './match/match.module';
import { TeamModule } from './team/team.module';
import { PlayModule } from './play/play.module';
import { UseOfPlayModule } from './use-of-play/use-of-play.module';
import { Match } from './match/match.entity';
import { Play } from './play/play.entity';
import { UseOfPlay } from './use-of-play/use-of-play.entity';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'basquetbapp',
      entities: [User, Team, Events, Match, Play, UseOfPlay],
      synchronize: true
    })
    , UsersModule, MatchModule, TeamModule, PlayModule, UseOfPlayModule, EventsModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
