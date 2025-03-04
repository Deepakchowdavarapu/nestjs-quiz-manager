import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'elephant@129@129',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  // logging: true
};
