import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';
import { ContinentPostgresAdapterFetcher } from './fetchers/continent-postgres-adapter.fetcher';
import { ContinentPostgresAdapterPersister } from './persisters/continent-postgres-adapter.persister';

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  providers: [
    ContinentPostgresAdapterFetcher,
    ContinentPostgresAdapterPersister
  ],
  exports: [
    ContinentPostgresAdapterFetcher,
    ContinentPostgresAdapterPersister
  ],
})
export class ContinentPostgresAdapterModule { }
