import { Module } from '@nestjs/common';
import { WelcomeController } from 'src/modules/welcome/controllers/welcome.controller';
import { WelcomeService } from 'src/modules/welcome/services/welcome.service';

@Module({
  imports: [],
  controllers: [WelcomeController],
  providers: [WelcomeService],
})
export class HttpModule {}
