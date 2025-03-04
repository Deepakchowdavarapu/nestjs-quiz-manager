import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async userRegister(@Body() user: createUserDto) {
    return await this.userService.userRegister(user);
  }
}
