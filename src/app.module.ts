import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WakeonlanController } from './controllers/wakeonlan/wakeonlan.controller';
import { WakeonlanService } from './services/wakeonlan/wakeonlan.service';


@Module({
  imports: [],
  controllers: [AppController, WakeonlanController],
  providers: [AppService, WakeonlanService],
})
export class AppModule {}
