import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';

@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }
}
