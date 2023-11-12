import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/user.controller';
import { FeedbackController } from './controllers/feedback.controller';
import { FeedbackService } from './services/feedback.service';

@Module({
  imports: [],
  controllers: [UserController, FeedbackController],
  providers: [UserService, PrismaService, FeedbackService],
})
export class AppModule {}
