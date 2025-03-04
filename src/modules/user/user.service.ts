import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async userRegister(user: createUserDto) {
    try {
      if (user.confirmPassword !== user.password) {
        throw new BadRequestException('Passwords do not match');
      }

      const salt = await bcrypt.genSalt();
      const newPassword = await bcrypt.hash(user.password, salt);

      const new_user = this.userRepository.create({
        name: user.name,
        email: user.email,
        password: newPassword,
        createdAt: new Date(),
      });

      console.log('Attempting to save user:', new_user); // Add this line

      const savedUser = await this.userRepository.save(new_user);
      return savedUser;
    } catch (error) {
      console.error('Error details:', error); // Add this line
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to register user');
    }
  }
}
