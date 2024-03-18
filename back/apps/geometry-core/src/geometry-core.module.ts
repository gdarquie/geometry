import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeometryCoreController } from './geometry-core.controller';
import { GeometryCoreService } from './geometry-core.service';
import { CityPostgresAdapterModule } from '@geo/city-postgres-adapter';
import { City } from '@geo/city-postgres-adapter/entities/city.entity';
import { CityPostgresAdapterController } from '@geo/city-postgres-adapter/city-postgres-adapter.controller';
import { Continent } from '@geo/continent-postgres-adapter/entities/continent.entity';
import { ContinentPostgresAdapterModule } from '@geo/continent-postgres-adapter';
import { ContinentPostgresAdapterController } from '@geo/continent-postgres-adapter/controllers/continent-postgres-adapter.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgis',
      port: 5432,
      username: 'gis',
      password: 'pwd',
      database: 'gis',
      entities: [City, Continent],
      synchronize: true,
    }),
    CityPostgresAdapterModule,
    ContinentPostgresAdapterModule,
    TypeOrmModule.forFeature([City, Continent]),
  ],
  controllers: [
    GeometryCoreController,
    CityPostgresAdapterController,
  ],
  providers: [GeometryCoreService],
})
export class GeometryCoreModule { }
