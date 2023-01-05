import { Module } from '@nestjs/common';
import { DailyService } from './service/daily.service';

@Module({
  providers: [DailyService]
})
export class DailyModule {}
