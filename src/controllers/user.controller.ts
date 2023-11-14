import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserCreationDTO } from 'src/dtos/user-creation-dto';
import { UserService } from 'src/services/user.service';

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: UserCreationDTO,
  ): Promise<User> {
    const {
      email,
      name,
      profile,
      children,
      feedback_frequence,
      password
    } = userData;

    return this.userService.createUser({
      email,
      name,
      profile,
      children,
      feedback_frequence,
      password,
    });
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: {
      where: Prisma.UserWhereUniqueInput;
      data: Prisma.UserUpdateInput;
    },
  ): Promise<any> {
    const { where, data } = updateUserDto;
    return this.userService.updateUser({ where, data });
  }

}
