import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '../board.model';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ name: 'ip' })
  name: string;

  @Column()
  password: string;

  @Column()
  categories: string;

  @Column()
  status: BoardStatus;

  @Column({ default: 0 }) // 추가된 부분: reportCount 필드
  reportCount: number;
}
