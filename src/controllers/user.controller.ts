import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserCreationDTO, UserUpdateDTO } from 'src/dtos/user-dto';
import { UserService } from 'src/services/user.service';

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get(":id")
  async get(
    @Param("id") id: number,
  ): Promise<User> {
    return this.userService.findByID(id);
  }

  @Get("login/:email/:password")
  async login(
    @Param("email") email: string,
    @Param("password") password: string,
  ): Promise<User> {
    return this.userService.login(email, password);
  }

  @Get("parent_name/:name")
  async getParentByName(
    @Param("name") name: string,
  ): Promise<User[]> {
    return this.userService.findByName(name, "Pai");
  }

  @Get("teacher_name/:name")
  async getTeacherByUserName(
    @Param("name") name: string,
  ): Promise<User[]> {
    return this.userService.findByName(name, "Professor");
  }

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

  @Put()
  async updateUser(
    @Body() updateUserData: UserUpdateDTO,
  ): Promise<User> {
    return this.userService.updateUser(updateUserData);
  }

}
