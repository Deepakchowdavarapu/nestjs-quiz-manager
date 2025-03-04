import { IsNotEmpty, Length } from 'class-validator';

export class createQuestionDto {
  @IsNotEmpty({ message: 'the question cannot be empty' })
  @Length(3, 255)
  question: string;

  @IsNotEmpty()
  quizId: number;
}
