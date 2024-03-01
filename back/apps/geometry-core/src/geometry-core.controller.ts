import { Controller, Get } from '@nestjs/common';
import { GeometryCoreService } from './geometry-core.service';

@Controller()
export class GeometryCoreController {
  constructor(private readonly geometryCoreService: GeometryCoreService) {}

  @Get()
  getHello(): string {
    return this.geometryCoreService.getHello();
  }
}
