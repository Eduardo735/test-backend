import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('report_company')
export default class ReportCompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_primary: boolean;

  @DeleteDateColumn()
  deleted_at?: Date;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;
}
