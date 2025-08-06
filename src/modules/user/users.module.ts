import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from 'src/entities/State.entity';
import { User } from 'src/entities/User.entity';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      State,
      User,
      State,
    ]),
  ],
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule { }
