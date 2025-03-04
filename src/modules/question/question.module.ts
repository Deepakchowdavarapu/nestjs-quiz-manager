import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';
import { QuizModule } from '../quiz/quiz.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question]),
    forwardRef(() => QuizModule), // Add forward reference to break circular dependency
  ],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
  exports: [QuestionService], // Export QuestionService to be used in other modules
})
export class QuestionModule {}
