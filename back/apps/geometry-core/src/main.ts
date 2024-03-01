import { NestFactory } from '@nestjs/core';
import { GeometryCoreModule } from './geometry-core.module';

async function bootstrap() {
  const app = await NestFactory.create(GeometryCoreModule);
  await app.listen(3000);
}
bootstrap();
