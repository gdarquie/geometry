import { Controller, Get, Post } from "@nestjs/common";
import { City } from "./entities/city.entity";
import { CityPostgresAdapterGetter } from "./city-postgres-adapter.getter";

@Controller()
export class CityPostgresAdapterController {
  constructor(
    private readonly cityPostgresAdapterGetter: CityPostgresAdapterGetter
  ) { }

  @Get('/cities')
  async getCity(): Promise<City[]> {
    return await this.cityPostgresAdapterGetter.getCities();
  }

  @Post('/cities')
  createCity(): string {
    // this.geometryCoreService.saveCity();
    return "A city has been created.";
  }


}