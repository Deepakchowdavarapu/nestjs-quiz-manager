import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './quiz.entity';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository:QuizRepository
  ){}

  getAllQuiz() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  async createNewQuiz(quiz : CreateQuizDto){
    return await this.quizRepository.save(quiz)
  }
}

