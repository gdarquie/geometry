import { Test, TestingModule } from '@nestjs/testing';
import { CityPostgresAdapterFetcher } from './city-postgres-adapter.fetcher';

describe('CityPostgresAdapterGetter', () => {
  let getter: CityPostgresAdapterFetcher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityPostgresAdapterFetcher],
    }).compile();

    getter = module.get<CityPostgresAdapterFetcher>(CityPostgresAdapterFetcher);
  });

  it('should be defined', () => {
    expect(getter).toBeDefined();
  });
});
