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

  getPolygonPoints() {
    return "200,30 250,180 110,180";
  }

  computePolygonPoints(pointsNumber = 10) {
    let points = "";
    points += `${Math.floor(Math.random() * 10)},${Math.floor(Math.random() * 10)}`;

    for (let i = 1; i < pointsNumber; i++) {
      let x = 10 + i;
      let y = 10 + i;
      points += `${x},${y}`;
    }

    console.log('points =', points);
    return points;

  }

}
