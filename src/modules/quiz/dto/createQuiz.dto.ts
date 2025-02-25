import { IsNotEmpty, Length } from "class-validator";

import { IsString } from "class-validator";

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, { message: 'Title must be between 3 and 100 characters' })
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  @Length(3, 1000, { message: 'Description must be between 3 and 1000 characters' })
  description: string;
}
