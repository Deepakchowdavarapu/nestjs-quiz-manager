import { Module, forwardRef } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './quiz.entity';
import { QuestionModule } from '../question/question.module';
import { QuestionService } from '../question/question.service';
import { QuestionRepository } from '../question/question.repository';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz]), forwardRef(() => QuestionModule)],
  providers: [QuizService, QuizRepository],
  exports: [QuizService],
})
export class QuizModule {}
