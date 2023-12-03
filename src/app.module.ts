import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmoCrmService } from './amo-crm/amo-crm.service';
import { AmoCrmController } from './amo-crm/amo-crm.controller';

@Module({
  imports: [],
  controllers: [AppController, AmoCrmController],
  providers: [AppService, AmoCrmService],
})
export class AppModule {}
