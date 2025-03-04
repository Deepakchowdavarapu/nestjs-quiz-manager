import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionRepository } from './option.repository';
import { Question } from '../question/question.entity';
import { Option } from './option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async getOptions() {
    return await this.optionRepository.find({
      relations: ['question'],
    });
  }

  async createOption(
    text: string,
    question: Question,
    isCorrect: boolean,
  ): Promise<Option> {
    const newOption = this.optionRepository.create({
      text: text,
      question: question,
      isCorrect: isCorrect,
    });

    await this.optionRepository.save(newOption);
    return newOption;
  }

  async UpdateOptionById(
    optionId: number,
    text: string,
    isCorrect: boolean,
  ): Promise<Option> {
    const option = await this.optionRepository.findOne({
      where: { id: optionId },
    });
    if (!option) {
      throw new NotFoundException(`Option with ID ${optionId} not found`);
    }

    await this.optionRepository.update({ id: optionId }, { text, isCorrect });

    const updatedOption = await this.optionRepository.findOne({
      where: { id: optionId },
    });
    if (!updatedOption) {
      throw new NotFoundException(
        `Option with ID ${optionId} not found after update`,
      );
    }
    return updatedOption;
  }
}
