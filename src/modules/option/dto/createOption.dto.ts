import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class createOptionDto {
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsBoolean()
  @IsNotEmpty()
  isCorrect: boolean;
}
