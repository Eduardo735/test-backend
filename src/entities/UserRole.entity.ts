import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Role from './Role.entity';
import { User } from './User.entity';

@Entity('user_role')
class UserRole {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column('uuid')
  @Exclude()
  user_id: string;

  @Column('uuid')
  @Exclude()
  role_id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role, (role) => role.id, {
    eager: true,
  })
  @JoinColumn({ name: 'role_id' })
  role: Role;
}

export default UserRole;
