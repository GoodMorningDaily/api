import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { DailyService } from './service/daily.service';
import { DailyController } from './controller/daily.controller';

@Module({
  providers: [DailyService, PrismaService],
  controllers: [DailyController],
})
export class DailyModule {}
