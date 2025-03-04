import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { REGEX } from 'src/app.utils';

export class createUserDto {
  @IsNotEmpty()
  @Length(6, 12)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 14, {
    message: REGEX.PASSWORD_LENGTH_MESSAGE,
  })
  @Matches(REGEX.PASSWORD_RULE, {
    message: REGEX.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @IsNotEmpty()
  @Length(8, 14)
  confirmPassword: string;
}
