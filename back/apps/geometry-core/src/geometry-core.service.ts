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

  computeContinentPoints() {

  }

  computePolygonPoints(pointsNumber = 100000) {
    const variable = 10;
    const length = 950;
    const height = 500;
    let points = "";
    const initialX = Math.floor(Math.random() * variable);
    const initialY = Math.floor(Math.random() * variable);
    points += `${initialX},${initialY}`;

    for (let i = 1; i < pointsNumber; i++) {
      let x = i;
      let y = i;

      if (i < pointsNumber / 2) {
        x = x + i + Math.floor(Math.random() * length) + Math.floor(Math.random() * variable);
        y = y + i + Math.floor(Math.random() * height) + Math.floor(Math.random() * variable);
      } else if (i == pointsNumber - 1) {
        x = initialX;
        y = initialY;
      }
      else {
        x = x + i - Math.floor(Math.random() * variable);
        y = y + i - Math.floor(Math.random() * variable);
      }

      points += ` ${x},${y}`;
    }

    console.log('points =', points);
    return points;
  }

}
