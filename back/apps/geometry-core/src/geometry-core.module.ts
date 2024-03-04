import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeometryCoreController } from './geometry-core.controller';
import { GeometryCoreService } from './geometry-core.service';
import { CityPostgresAdapterModule } from '@app/city-postgres-adapter';
import { City } from '@app/city-postgres-adapter/entities/city.entity';
import { CityPostgresAdapterController } from '@app/city-postgres-adapter/city-postgres-adapter.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgis',
      port: 5432,
      username: 'gis',
      password: 'pwd',
      database: 'gis',
      entities: [City],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([City]),
    CityPostgresAdapterModule,
  ],
  controllers: [GeometryCoreController, CityPostgresAdapterController],
  providers: [GeometryCoreService],
})
export class GeometryCoreModule { }
