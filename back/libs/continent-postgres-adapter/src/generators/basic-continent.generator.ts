import { Injectable } from "@nestjs/common";
import { Continent } from "../entities/continent.entity";
import { ContinentConfigurationInterface } from "../interfaces/continent-configuration.interface";

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

  private computeDrawPointsCount(count: number) {
    const result = count / 100;

    return (result > 10 || count < 10)
      ? result
      : 10;
  }

  private computeDrawPointsCoordinates(
    count: number,
    continentConfiguration: ContinentConfigurationInterface
  ): Array<number> {
    // todo: return a list a coordinatess
    return [0, 1];
  }

  // to correct and to update
  generateSegmentCoordinates(
    initialPosition: Array<number>,
    targetPosition: Array<number>,
    count: number
  ) {
    const initX = initialPosition[0];
    const initY = initialPosition[1];

    const targetX = targetPosition[0];
    const targetY = targetPosition[1];

    let x = initX;
    let y = initY;

    // example: init position is 1 and final is 21 = 20
    // we need to obtain 10 in 10 operations: 20/10 = 2

    // every loop we try something like x * 2^10
    // NOOOOOOOO
    const factorX = (targetX - initX) / count;
    const factorY = (targetY - initY) / count;

    for (let i = 0; i < count; i++) {

      // first position
      // targetPosition
    }
  }

  private generateCoordinates(count = 100) {
    let coordinates = [[]];
    let x = 50;
    let y = 5;

    // todo: apply the new process to compute coordinates 
    const drawPointsCount = this.computeDrawPointsCount(count);
    const segmentPointsCount = Math.floor(count / this.computeDrawPointsCount(count));
    // 1) compute the coordinates of the draw points
    // 2) for each drawPoints, generates the transition
    // for every segment compute coordinates: it begins from a point and finish to another

    for (let i = 0; i < count; i++) {
      if (i == 0) {
        coordinates[i] = [x, y];
      } else if (i === count) {
        coordinates[i] = [this.stayRightLeft(x), this.stayUpDown(y)];
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

        x = coordinates[i][0];
        y = coordinates[i][1];
      }
    }

    console.log(coordinates);

    return [coordinates];
  }

  private generateName() {
    return 'Default name';
  }

  private generateDescription() {
    return 'Default description';
  }

  private goRight(lastX, attraction = 20) {
    return lastX + Math.floor(Math.random() * attraction);
  }

  private goLeft(lastX, attraction = 20) {
    return lastX - Math.floor(Math.random() * attraction);
  }

  private stayRightLeft(lastX, attraction = 10) {
    return lastX - (Math.floor(Math.random() * attraction)) + (Math.floor(Math.random() * attraction));
  }

  private goUp(lastY, attraction = 10) {
    return lastY - Math.floor(Math.random() * attraction);
  }

  private goDown(lastY, attraction = 10) {
    return lastY + Math.floor(Math.random() * attraction);

  }

  private stayUpDown(lastY, attraction = 2) {
    return lastY - (Math.floor(Math.random() * attraction)) + (Math.floor(Math.random() * attraction));
  }
}