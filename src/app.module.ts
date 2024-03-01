import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WakeonlanController } from './controllers/wakeonlan/wakeonlan.controller';
import { WakeonlanService } from './services/wakeonlan/wakeonlan.service';
import { WakeonLanModel } from './models/LocalWol/wol.model';

@Module({
  imports: [WakeonLanModel],
  controllers: [AppController, WakeonlanController],
  providers: [AppService, WakeonlanService],
})
export class AppModule {}
