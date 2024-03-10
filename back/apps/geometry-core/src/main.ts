import { NestFactory } from '@nestjs/core';
import { GeometryCoreModule } from './geometry-core.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    GeometryCoreModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'geometry-core/', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'geometry-core/', 'views'));
  // app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();
