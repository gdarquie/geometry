import { Module } from '@nestjs/common';
import { GeometryCoreController } from './geometry-core.controller';
import { GeometryCoreService } from './geometry-core.service';

@Module({
  imports: [],
  controllers: [GeometryCoreController],
  providers: [GeometryCoreService],
})
export class GeometryCoreModule {}
