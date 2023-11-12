import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Feedback } from '@prisma/client';
import { FeedbackCreationDTO } from 'src/dtos/feedback-creation-dto';
import { FeedbackService } from 'src/services/feedback.service';

@Controller("feedback")
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  async create(
    @Body() feedbackData: FeedbackCreationDTO,
  ): Promise<Feedback> {
    return this.feedbackService.create(feedbackData);
  }

  @Put()
  async update(
    @Body() feedbackData: { response: string; id: number },
  ): Promise<Feedback> {
    return this.feedbackService.update(feedbackData.response, feedbackData.id);
  }

  @Get(":id")
  async get(
    @Param("id") id: number,
  ): Promise<Feedback> {
    return this.feedbackService.findByID(id);
  }

  @Get("user/:userId")
  async getByUserID(
    @Param("userId") userId: number,
  ): Promise<Feedback[]> {
    return this.feedbackService.findByUserID(userId);
  }
}
