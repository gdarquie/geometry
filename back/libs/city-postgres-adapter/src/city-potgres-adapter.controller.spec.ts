import { Test, TestingModule } from '@nestjs/testing';

import { CityPostgresAdapterController } from './city-postgres-adapter.controller';
import { CityPostgresAdapterGetter } from './city-postgres-adapter.getter';

describe('CityPostgresAdapterController', () => {
  let cityPostgresAdapterController: CityPostgresAdapterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CityPostgresAdapterController],
      providers: [CityPostgresAdapterGetter],
    }).compile();

    cityPostgresAdapterController = app.get<CityPostgresAdapterController>(CityPostgresAdapterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cityPostgresAdapterController.getCity()).toBe('Hello World!');
    });
  });
});
