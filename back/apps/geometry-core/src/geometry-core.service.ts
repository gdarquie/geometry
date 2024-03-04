import { City } from '@app/city-postgres-adapter/entities/city.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GeometryCoreService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async saveCity() {
    await this.cityRepository.save({
      name: "City 1",
      description: "A new city",
      localisation: {
        type: "Point",
        coordinates: [116.443987, 39.920843],
      }
    });

    await this.cityRepository.save({
      name: "City 2",
      description: "Another new city",
      localisation: {
        type: "Point",
        coordinates: [1, 10],
      }
    });
  }
}
