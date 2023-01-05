import { Daily } from '@prisma/client';
import { DailyService } from './../service/daily.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('daily')
export class DailyController {
  constructor(private readonly dailyService: DailyService) {}
  @Get()
  async getAllDaily(): Promise<Daily[]> {
    return this.dailyService.getAllDaily();
  }
  @Post()
  async createDaily(@Body() postData: Daily): Promise<Daily> {
    return this.dailyService.createDaily(postData);
  }
  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<Daily | null> {
    return this.dailyService.getDaily(id);
  }
  @Put(':id')
  async Update(
    @Param('id') id: number,
    @Body() updateData: Daily,
  ): Promise<Daily> {
    return this.dailyService.updateDaily(id, updateData);
  }
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<Daily> {
    return this.dailyService.deleteDaily(id);
  }
}
