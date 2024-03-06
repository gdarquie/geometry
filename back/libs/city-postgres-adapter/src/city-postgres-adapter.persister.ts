import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CityPostgresAdapterPersister {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>
  ) { }
  async saveCity(city: City) {
    return await this.cityRepository.save(city)
  }
}
