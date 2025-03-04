import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './modules/question/question.module';
import { OptionModule } from './modules/option/option.module';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    QuestionModule,
    OptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
