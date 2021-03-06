import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusModule } from './Status/status.module';
import { ScoreModule } from './Score/score.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), StatusModule, ScoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
