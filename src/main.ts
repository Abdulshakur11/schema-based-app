import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServerConfig } from './config/server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ServerConfig.port);
  console.log(`Server is running on port ${ServerConfig.port}...`)
}
bootstrap();
