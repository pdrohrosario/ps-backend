import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
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
}
