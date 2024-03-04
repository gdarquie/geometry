import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CityPostgresAdapterGetter {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>
  ) { }
  async getCities() {
    return await this.cityRepository.find()
  }
}
