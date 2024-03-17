import { Controller, Get, Render, Res } from '@nestjs/common';
import { GeometryCoreService } from './geometry-core.service';
import { CityPostgresAdapterFetcher } from '@app/city-postgres-adapter';

@Controller()
export class GeometryCoreController {
  constructor(
    private readonly geometryCoreService: GeometryCoreService,
    private readonly cityFetcher: CityPostgresAdapterFetcher,
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

    return { message: 'Welcome on views poc.', coordinates, polygonPoints };
  }

  // @todo: remove when not needed anymore
  // it is an example of the geojson format expected by leaflet
  @Get('/states')
  getStates(): string {
    return JSON.stringify([
      {
        "type": "Features",
        "properties": {
          "party": "Republicans"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -104.05,
                48.99
              ],
              [
                -97.22,
                48.98
              ],
              [
                -96.58,
                45.94
              ],
              [
                -104.03,
                45.94
              ],
              [
                -104.05,
                48.99
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "party": "Democrat"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -109.05,
                41.00
              ],
              [
                -102.06,
                40.99
              ],
              [
                -102.03,
                36.99
              ],
              [
                -109.04,
                36.99
              ],
              [
                -109.05,
                41.00
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "party": "Democrat"
        },
        "geometry": {
          "type": "MultiLineString",
          "coordinates": [
            [
              [
                -73.974541,
                40.582351
              ],
              [
                -73.973203,
                40.582724
              ],
              [
                -73.970587,
                40.583218
              ],
              [
                -73.9692139,
                40.583531
              ],
              [
                -73.966894,
                40.583348
              ],
              [
                -73.96536,
                40.583278
              ]
            ]
          ]
        }
      }
    ]);

  }
}
