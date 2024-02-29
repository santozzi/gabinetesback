import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //wol.wake('30-9C-23-04-87-FC')
}
bootstrap();
