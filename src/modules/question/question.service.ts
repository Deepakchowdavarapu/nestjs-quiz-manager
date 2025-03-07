import { BadRequestException, Injectable } from '@nestjs/common';
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
    return await this.questionRepository
      .createQueryBuilder('qt')
      .leftJoinAndSelect('qt.options', 'o', 'qt.id = o.questionId')
      .getMany();
  }

  async getQuestionById(id: number) {
    const fullQuestion = await this.questionRepository
      .createQueryBuilder('qt')
      .where('qt.id = :id', { id })
      .leftJoinAndSelect('qt.options', 'o')
      .getOne();

    if (!fullQuestion) {
      throw new BadRequestException(`Question with id ${id} not found`);
    }

    return fullQuestion;
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
