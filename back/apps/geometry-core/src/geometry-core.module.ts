import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeometryCoreController } from './geometry-core.controller';
import { GeometryCoreService } from './geometry-core.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgis',
      port: 5432,
      username: 'gis',
      password: 'pwd',
      database: 'gis',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [GeometryCoreController],
  providers: [GeometryCoreService],
})
export class GeometryCoreModule { }
