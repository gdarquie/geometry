import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Continent } from './entities/continent.entity';
import { ContinentPostgresAdapterFetcher } from './fetchers';
import { ContinentPostgresAdapterPersister } from './persisters';
import { BasicContinentGenerator } from './generators';
import { ContinentPostgresAdapterController } from './controllers/continent-postgres-adapter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Continent])],
  providers: [
    ContinentPostgresAdapterFetcher,
    ContinentPostgresAdapterPersister,
    BasicContinentGenerator,
  ],
  controllers: [
    ContinentPostgresAdapterController,
  ],
  exports: [
    ContinentPostgresAdapterFetcher,
    ContinentPostgresAdapterPersister
  ],
})
export class ContinentPostgresAdapterModule { }
