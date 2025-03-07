import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './modules/question/question.module';
import { OptionModule } from './modules/option/option.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    QuestionModule,
    OptionModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
