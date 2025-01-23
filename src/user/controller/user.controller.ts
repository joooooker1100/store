import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(
    @Body()
    userData: {
      userName: string;
      position: string;
      phone: string;
      email: string;
    },
  ) {
    await this.userService.createUser(
      userData.userName,
      userData.position,
      userData.phone,
      userData.email,
    );
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body()
    userData: {
      userName: string;
      position: string;
      phone: string;
      email: string;
    },
  ) {
    await this.userService.updateUser(
      id,
      userData.userName,
      userData.position,
      userData.phone,
      userData.email,
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);
  }
}
