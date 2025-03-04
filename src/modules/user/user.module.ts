import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { user } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([user]), forwardRef(() => user)],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
