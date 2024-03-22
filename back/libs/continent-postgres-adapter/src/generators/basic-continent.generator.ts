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
    let x = 1;
    let y = 1;

    for (let i = 0; i < count; i++) {
      if (i == 0) {
        coordinates[i] = [x, y];
      } else {
        if (i < count / 2) {
          coordinates[i] = [
            this.goRight(x),
            this.goDown(y)];
        } else {
          coordinates[i] = [
            this.goLeft(x),
            this.goUp(y)
          ];
        }
        coordinates[i] = this.computeCoordinatesValues(x, y);
        x = coordinates[i][0];
        y = coordinates[i][1];
      }

    }

    return [coordinates];
  }

  private generateName() {
    return 'Default name';
  }

  private generateDescription() {
    return 'Default description';
  }

  private computeCoordinatesValues(lastX, lastY) {
    const x = lastX + Math.floor(Math.random() * 10);
    const y = lastY + Math.floor(Math.random() * 10);
    return [x, y]
  }

  private goRight(lastX) {
    return lastX + Math.floor(Math.random() * 10);
  }

  private goLeft(lastX) {
    return lastX - Math.floor(Math.random() * 10);
  }

  private stayRightLeft(lastX) {
    return lastX - (Math.floor(Math.random() * 2)) + (Math.floor(Math.random() * 2));
  }

  private goUp(lastY) {
    return lastY + Math.floor(Math.random() * 10);
  }

  private goDown(lastY) {
    return lastY - Math.floor(Math.random() * 10);

  }

  private stayUpDown(lastY) {
    return lastY - (Math.floor(Math.random() * 2)) + (Math.floor(Math.random() * 2));
  }
}