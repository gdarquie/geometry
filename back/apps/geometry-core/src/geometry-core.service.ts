import { Injectable } from '@nestjs/common';

@Injectable()
export class GeometryCoreService {
  getHello(): string {
    return 'Hello World!';
  }
}
