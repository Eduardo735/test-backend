import { User } from './User.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('firm')
export class Firm {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @Column('varchar')
  website: string;

  @Column('text', { array: true, nullable: true })
  valid_domain: string[];

  @Column('boolean')
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;

  @OneToMany(() => User, (user) => user.firm)
  users: User[];
}
