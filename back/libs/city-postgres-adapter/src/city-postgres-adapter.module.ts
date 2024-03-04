import { Module } from '@nestjs/common';
import { CityPostgresAdapterGetter } from './city-postgres-adapter.getter';
import { City } from './entities/city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([City]),
  ],
  providers: [CityPostgresAdapterGetter],
  exports: [CityPostgresAdapterGetter],
})
export class CityPostgresAdapterModule { }
