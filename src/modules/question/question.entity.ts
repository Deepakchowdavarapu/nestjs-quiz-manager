import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Quiz } from '../quiz/quiz.entity';
import { Option } from '../option/option.entity';

@Entity('question')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @Column({ name: 'quiz_id' })
  quizId: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions, {
    onDelete: 'CASCADE',
    nullable: false,
  })

  @JoinColumn({ name: 'quiz_id' })
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
