import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WakeonlanController } from './controllers/wakeonlan/wakeonlan.controller';
import { WakeonlanService } from './services/wakeonlan/wakeonlan.service';
import { ComercioPbController } from './controllers/escuelas/comercio-pb/comercio-pb.controller';
import { ComercioPbService } from './services/escuelas/comercio-pb/comercio-pb.service';
import { TodoService } from './services/todo/todo.service';



@Module({
  imports: [],
  controllers: [AppController, WakeonlanController, ComercioPbController],
  providers: [AppService, WakeonlanService, ComercioPbService, TodoService],
})
export class AppModule {}
