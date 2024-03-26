import { Controller, Get } from '@nestjs/common';
import { WelcomeService } from '../services/welcome.service';

@Controller()
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  @Get()
  welcome(): string {
    return this.welcomeService.execute();
  }
}
