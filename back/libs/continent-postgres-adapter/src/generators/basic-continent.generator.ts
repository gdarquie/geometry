import { Injectable } from "@nestjs/common";
import { Continent } from "../entities/continent.entity";

@Injectable()
export class BasicContinentGenerator {
  generate() {
    const continent = new Continent();
    continent.name = this.generateName();
    continent.description = this.generateDescription();
    continent.localisation = {
      type: "Polygon",
      coordinates: this.generateCoordinates(),
    };

    return continent;
  }

  private generateCoordinates(count = 100) {
    let coordinates = [[]];

    for (let i = 0; i < count; i++) {
      // todo replace with values
      coordinates[i] = ['1', '1'];
    }

    return [coordinates];
  }

  private generateName() {
    return 'Default name';
  }

  private generateDescription() {
    return 'Default description';
  }
}