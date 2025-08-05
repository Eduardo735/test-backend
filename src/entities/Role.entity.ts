import { User } from './User.entity';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserRole from './UserRole.entity';

@Entity('role')
class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('boolean')
  is_active: boolean;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  @Exclude()
  updated_at: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  @JoinColumn({ name: 'id' })
  userRoles: UserRole[];

  @ManyToMany(() => User)
  users: User[];
}

export default Role;
