import { Controller, Get, Post } from "@nestjs/common";
import { City } from "./entities/city.entity";
import { CityPostgresAdapterFetcher } from "./city-postgres-adapter.fetcher";
import { CityPostgresAdapterPersister } from "./city-postgres-adapter.persister";

@Controller()
export class CityPostgresAdapterController {
  constructor(
    private readonly fetcher: CityPostgresAdapterFetcher,
    private readonly persister: CityPostgresAdapterPersister,
  ) { }

  @Get('/cities')
  async getCity(): Promise<City[]> {
    return await this.fetcher.getCities();
  }

  @Post('/cities')
  createCity(): string {
    // todo: i need to extract the data that from the request body
    // and then to use a dto
    const city = new City();
    city.name = 'A city name';
    city.description = "A non interesting city description";
    city.localisation = {
      type: "Point",
      coordinates: [10, 20],
    }

    const city2 = new City();
    city2.name = 'A city name';
    city2.description = "A non interesting city description";
    city2.localisation = {
      type: "Point",
      coordinates: [56, 35],
    }

    const city3 = new City();
    city3.name = 'A city name';
    city3.description = "A non interesting city description";
    city3.localisation = {
      type: "Point",
      coordinates: [12, 46],
    }

    this.persister.saveCity(city);
    this.persister.saveCity(city2);
    this.persister.saveCity(city3);

    return "A city has been created.";
  }

}