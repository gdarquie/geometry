import { Test, TestingModule } from '@nestjs/testing';
import { GeometryCoreController } from './geometry-core.controller';
import { GeometryCoreService } from './geometry-core.service';

describe('GeometryCoreController', () => {
  let geometryCoreController: GeometryCoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeometryCoreController],
      providers: [GeometryCoreService],
    }).compile();

    geometryCoreController = app.get<GeometryCoreController>(GeometryCoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(geometryCoreController.getHello()).toBe('Hello World!');
    });
  });
});
