import { Injectable } from '@nestjs/common';

@Injectable()
export class WelcomeService {
  execute(): string {
    return 'Welcome to pairtner API';
  }
}
