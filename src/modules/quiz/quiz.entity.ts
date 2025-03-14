import { Entity, OneToMany } from 'typeorm';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../question/question.entity';

@Entity('quiz')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    comment: 'The quiz title',
  })
  title: string;

  @Column({
    type: 'text',
    nullable: false,
    comment: 'The quiz description',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
