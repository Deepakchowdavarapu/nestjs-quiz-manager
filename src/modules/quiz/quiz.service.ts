import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<[Quiz[], number]> {
    const quizzes = await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt', 'q.id = qt.quizId')
      .leftJoinAndSelect('qt.options', 'o')
      .getManyAndCount();
    return quizzes;
    // return await this.quizRepository.find()
  }

  async getQuizById(id: number): Promise<Quiz> {
    const fullQuiz = await this.quizRepository
      .createQueryBuilder('q')
      .where('q.id = :id', { id })
      .leftJoinAndSelect('q.questions', 'qt', 'q.id = qt.quizId')
      .leftJoinAndSelect('qt.options', 'o')
      .getOne();

    if (!fullQuiz) {
      throw new BadRequestException(`Quiz with id ${id} not found`);
    }

    return fullQuiz;
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
