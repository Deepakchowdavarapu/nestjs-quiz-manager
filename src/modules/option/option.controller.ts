import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  Put,
  Param,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { createOptionDto } from './dto/createOption.dto';
import { QuestionService } from '../question/question.service';
import { QuestionRepository } from '../question/question.repository';

@Controller('option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Get('/')
  @HttpCode(202)
  getOptions() {
    return this.optionService.getOptions();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async createOption(@Body() request: createOptionDto) {
    const question = await this.questionService.getQuestionById(
      request.questionId,
    );

    if (!question) {
      throw new NotFoundException(
        `Question with ID ${request.questionId} not found`,
      );
    }

    return await this.optionService.createOption(
      request.text,
      question,
      request.isCorrect,
    );
  }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async UpdateOptionById(
    @Body() request: createOptionDto,
    @Param('id') optionId: number,
  ) {
    const question = await this.questionService.getQuestionById(
      request.questionId,
    );
    if (!question) {
      throw new NotFoundException(
        `Question with ID ${request.questionId} not found`,
      );
    }

    return await this.optionService.UpdateOptionById(
      optionId,
      request.text,
      request.isCorrect,
    );
  }

  @Get('/:id')
  async getOptionById(@Param('id') optionId: number) {
    return await this.optionService.getOptionById(optionId);
  }
}
