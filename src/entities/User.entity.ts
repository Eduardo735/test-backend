import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { nullable: true })
  @Exclude()
  firm_id: string;

  @Column('varchar', { nullable: true })
  first_name: string;

  @Column('varchar', { nullable: true })
  last_name: string;

  @Column('varchar', { nullable: true })
  email: string;

  @Column('varchar', { nullable: true })
  job_position: string;

  @Column('varchar', { nullable: true })
  id_web_app: string;

  @Column('varchar', { nullable: true })
  id_saas_app: string;


  @Column('varchar', { nullable: true })
  time_zone: string;

  @Column('boolean', { default: false })
  mfa: boolean;

  @Column('varchar', { nullable: true })
  @Exclude()
  mfa_secret: string;

  @Column('boolean', { default: false })
  is_active: boolean;

  @Column('boolean', { default: false })
  @Exclude()
  is_deleted: boolean;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;
}
