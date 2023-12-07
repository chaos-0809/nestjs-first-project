import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from '../board.model';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // 제목
  title: string;

  @Column() //설명
  description: string;

  @Column() //사용자 이름
  name: string;

  @Column() //비밀번호
  password: string;

  @Column() // 카테고리 설정
  categories: string;

  @Column() // 공개, 비공개 설정
  status: BoardStatus;

  @Column({ default: 0 }) // 추가된 부분: reportCount 필드
  reportCount: number;

  @CreateDateColumn() //날짜 설정
  createdAt: Date;
}
