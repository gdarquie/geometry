import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Continent } from '../entities/continent.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContinentPostgresAdapterPersister {
  constructor(
    @InjectRepository(Continent)
    private readonly continentRepository: Repository<Continent>
  ) { }

  async saveContinent(continent: Continent) {
    return await this.continentRepository.save(continent)
  }

  async deleteContinent(continentId: number) {
    return await this.continentRepository.delete(continentId)
  }
}
