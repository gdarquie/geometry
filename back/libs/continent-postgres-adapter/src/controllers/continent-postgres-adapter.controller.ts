import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Continent } from "../entities/continent.entity";
import { ContinentPostgresAdapterFetcher } from "../fetchers/continent-postgres-adapter.fetcher";
import { ContinentPostgresAdapterPersister } from "../persisters/continent-postgres-adapter.persister";

@Controller()
export class ContinentPostgresAdapterController {
  constructor(
    private readonly fetcher: ContinentPostgresAdapterFetcher,
    private readonly persister: ContinentPostgresAdapterPersister,
  ) { }

  @Get('/continents')
  async getCity(): Promise<Continent[]> {
    return await this.fetcher.getContinents();
  }

  @Delete('/continents/:id')
  deleteContinent(@Param('id') continentId: number) {
    this.persister.deleteContinent(continentId);
  }

  @Post('/continents')
  createCity(): string {
    const coordinates = [
      [
        [
          800,
          10
        ],
        [
          500,
          100
        ],
        [
          450,
          180
        ],
        [
          400,
          60
        ],
        [
          0,
          10
        ],
        [
          0,
          10
        ]
      ]
    ];
    // todo: i need to extract the data that from the request body
    // and then to use a dto
    const continent = new Continent();
    continent.name = 'A continent name';
    continent.description = "A non interesting continent description";
    continent.localisation = {
      type: "Polygon",
      coordinates: coordinates,
    }

    this.persister.saveContinent(continent);

    return "A continent has been created.";
  }

}