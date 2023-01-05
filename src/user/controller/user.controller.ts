import { User } from '@prisma/client';
import { UserService } from './../service/user.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Post()
  async createUser(@Body() postData: User): Promise<User> {
    return this.userService.createUser(postData);
  }
  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }
  @Put(':id')
  async Update(
    @Param('id') id: number,
    @Body() updateData: User,
  ): Promise<User> {
    return this.userService.updateUser(id, updateData);
  }
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
