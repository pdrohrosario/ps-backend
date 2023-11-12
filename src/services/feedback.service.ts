import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Feedback } from '@prisma/client';
import { FeedbackCreationDTO } from 'src/dtos/feedback-creation-dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async findByID(
    id: number,
  ): Promise<Feedback | null> {
    return this.prisma.feedback.findUnique({
      where: {
        id: Number(id)
      },
    });
  }

  async findByUserID(
    userId: number,
  ): Promise<Feedback[] | null> {
    return this.prisma.feedback.findMany({
      where: {
        id: Number(userId)
      },
    });
  }

  // async users(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<User[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async create(data: FeedbackCreationDTO): Promise<Feedback> {    
    return this.prisma.feedback.create({
      data,
    });
  }

  async update(response: string, id: number): Promise<Feedback> {
    return this.prisma.feedback.update({
      data: {
        response: response
      },
      where: {
        id: Number(id)
      },
    });
  }

  // async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
  //   return this.prisma.user.delete({
  //     where,
  //   });
  // }
}
