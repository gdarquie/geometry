import { Module } from '@nestjs/common';
import { CityPostgresAdapterFetcher } from './city-postgres-adapter.fetcher';
import { City } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityPostgresAdapterPersister } from './city-postgres-adapter.persister';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [
    CityPostgresAdapterFetcher,
    CityPostgresAdapterPersister
  ],
  exports: [
    CityPostgresAdapterFetcher,
    CityPostgresAdapterPersister],
})
export class CityPostgresAdapterModule { }
