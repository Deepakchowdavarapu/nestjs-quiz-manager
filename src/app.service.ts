import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hizru boiz';
  }

  postRandom(): string {
    return `bankai senbonzakura kageyoshi`;
  }
}
