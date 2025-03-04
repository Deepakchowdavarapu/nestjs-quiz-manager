import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createQuestionDto } from './dto/createQuestion.dto';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
import { QuizService } from '../quiz/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Get('/')
  async getAllQuestions() {
    return await this.questionService.getAllQuestions();
  }

  @Get('/:id')
  async getQuestionById(@Param('id', ParseIntPipe) id: number) {
    return await this.questionService.getQuestionById(id);
  }

  @Post('/')
  @HttpCode(202)
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: createQuestionDto): Promise<Question> {
    const quizId = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quizId);
  }
}
