import { Test, TestingModule } from '@nestjs/testing';
import { CityPostgresAdapterGetter } from './city-postgres-adapter.getter';

describe('CityPostgresAdapterGetter', () => {
  let getter: CityPostgresAdapterGetter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityPostgresAdapterGetter],
    }).compile();

    getter = module.get<CityPostgresAdapterGetter>(CityPostgresAdapterGetter);
  });

  it('should be defined', () => {
    expect(getter).toBeDefined();
  });
});
