import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }
  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async updateUser(id: number, data: User): Promise<User> {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  }
  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
