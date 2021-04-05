import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<a href="/cat">Cat</a>';
  }
  getTest(): string {
    return "<h1>Test</h1>"
  }
}
