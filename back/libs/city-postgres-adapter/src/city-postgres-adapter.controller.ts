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
      coordinates: [1, 2],
    }
    this.persister.saveCity(city);

    return "A city has been created.";
  }

}