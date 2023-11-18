import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';
import { UserUpdateDTO } from 'src/dtos/user-dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async login(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
        password: password
      }
    });
  }

  async findByID(
    id: number,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: Number(id)
      },
    });
  }

  async findByName(
    name: string,
    profile: string,
  ): Promise<User[] | null> {
    return this.prisma.user.findMany({
      where: {
        name: { contains: name},
        profile: profile,
      },
    });
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(data: UserUpdateDTO): Promise<User> {
    return this.prisma.user.update({
      data: {
        email: data.email,
        name: data.name,
        profile: data.profile,
        children: data.children,
        feedback_frequence: data.feedback_frequence,
        password: data.password,
      },
      where: {
        id: Number(data.id)
      }
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
