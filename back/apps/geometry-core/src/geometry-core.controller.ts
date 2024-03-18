import { Controller, Get, Render, Res } from '@nestjs/common';
import { GeometryCoreService } from './geometry-core.service';
import { CityPostgresAdapterFetcher } from '@geo/city-postgres-adapter';
import { ContinentPostgresAdapterFetcher } from '@geo/continent-postgres-adapter/fetchers/continent-postgres-adapter.fetcher';

@Controller()
export class GeometryCoreController {
  constructor(
    private readonly geometryCoreService: GeometryCoreService,
    private readonly cityFetcher: CityPostgresAdapterFetcher,
    private readonly continentFetcher: ContinentPostgresAdapterFetcher,
  ) { }

  @Get()
  getHello(): string {
    return this.geometryCoreService.getHello();
  }

  @Get('/poc')
  @Render('poc')
  async getView(@Res() res: Response) {
    const cities = await this.cityFetcher.getCities();

    let coordinates = [];

    if (cities.length > 0) {
      cities.forEach(city => {
        coordinates.push(city.localisation.coordinates);
      })
    }

    const polygonPoints = this.geometryCoreService.computeContinentPoints();

    const continents = await this.continentFetcher.getContinents();
    const continentsPoints = continents.map(continent => {
      return continent.localisation.coordinates.map(vector => vector.toString());
    });

    return {
      message: 'Welcome on views poc.',
      coordinates,
      polygonPoints,
      continentsPoints
    };
  }
}
