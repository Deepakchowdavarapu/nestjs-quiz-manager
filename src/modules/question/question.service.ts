import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';
import { createQuestionDto } from './dto/createQuestion.dto';
import { Quiz } from '../quiz/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getAllQuestions() {
    return await this.questionRepository.find();
  }

  async getQuestionById(id: number) {
    return await this.questionRepository.findOne({ where: { id } });
  }

  async createQuestion(
    question: createQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = this.questionRepository.create({
      question: question.question,
      quiz: quiz,
      quizId: quiz.id,
    });

    await this.questionRepository.save(newQuestion);
    return newQuestion;
  }
}
