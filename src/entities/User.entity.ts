import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Firm } from './Firm.entity';
import Role from './Role.entity';
import UserEmail from './UserEmail.entity';
import UserRole from './UserRole.entity';

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

  @ManyToOne(() => Firm, (firm) => firm.users)
  @JoinColumn({ name: 'firm_id' })
  firm: Firm;

  @OneToMany(() => UserEmail, (userEmail) => userEmail.user)
  @JoinColumn({ name: 'id' })
  userEmails: UserEmail[];

  @ManyToMany(() => UserRole, (userRole) => userRole.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  roles: Role[];
}
