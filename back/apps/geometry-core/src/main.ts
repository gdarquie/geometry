import { NestFactory } from '@nestjs/core';
import { GeometryCoreModule } from './geometry-core.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    GeometryCoreModule,
  );

  const projectPath = resolve('./apps/geometry-core/src/');

  app.useStaticAssets(join(projectPath, 'public'));
  app.setBaseViewsDir(join(projectPath, 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();
