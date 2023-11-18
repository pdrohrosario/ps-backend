import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PrismaService } from './services/prisma.service';
import { UserController } from './controllers/user.controller';
import { FeedbackController } from './controllers/feedback.controller';
import { FeedbackService } from './services/feedback.service';
import { ContactService } from './services/contact.service';
import { ContactController } from './controllers/contact.controller';

@Module({
  imports: [],
  controllers: [ContactController, FeedbackController, UserController],
  providers: [ContactService, FeedbackService, PrismaService, UserService],
})
export class AppModule {}
