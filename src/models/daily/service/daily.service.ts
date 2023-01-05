import { PrismaService } from './../../../prisma.service';
import { Injectable } from '@nestjs/common';
import { Daily } from '@prisma/client';

@Injectable()
export class DailyService {
  constructor(private prisma: PrismaService) {}

  async getAllDaily(): Promise<Daily[]> {
    return this.prisma.daily.findMany();
  }
  async getDaily(id: number): Promise<Daily | null> {
    return this.prisma.daily.findUnique({ where: { id: Number(id) } });
  }
  async createDaily(data: Daily): Promise<Daily> {
    return this.prisma.daily.create({
      data,
    });
  }
  async updateDaily(id: number, data: Daily): Promise<Daily> {
    return this.prisma.daily.update({
      where: { id: Number(id) },
      data,
    });
  }
  async deleteDaily(id: number): Promise<Daily> {
    return this.prisma.daily.delete({
      where: { id: Number(id) },
    });
  }
}
