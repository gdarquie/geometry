import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Continent } from '../entities/continent.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContinentPostgresAdapterFetcher {
  constructor(
    @InjectRepository(Continent)
    private readonly continentRepository: Repository<Continent>
  ) { }
  async getContinents() {
    return await this.continentRepository.find();
  }
}
