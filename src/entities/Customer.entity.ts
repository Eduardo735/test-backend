import { Exclude } from 'class-transformer';
// import { ReportContent } from './ReportContent.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  user_id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;

  @DeleteDateColumn()
  @Exclude()
  deleted_at?: Date;
}
