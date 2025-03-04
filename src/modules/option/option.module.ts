import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';
import { OptionRepository } from './option.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './option.entity';
import { QuestionService } from '../question/question.service';
import { QuestionRepository } from '../question/question.repository';

@Module({
  controllers: [OptionController],
  imports: [TypeOrmModule.forFeature([Option])],
  providers: [
    OptionService,
    OptionRepository,
    QuestionService,
    QuestionRepository,
  ],
})
export class OptionModule {}
