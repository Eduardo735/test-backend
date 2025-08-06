import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firm } from 'src/entities/Firm.entity';
import { Land } from 'src/entities/Land.entity';
import Role from 'src/entities/Role.entity';
import { User } from 'src/entities/User.entity';
import UserEmail from 'src/entities/UserEmail.entity';
import UserRole from 'src/entities/UserRole.entity';
import { UsersController } from './controllers/users.controller';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service';
import { WebhookHandlerService } from './services/webhook-handler.service';
import { UserWebhookService } from './services/user-webhook.service';
import { AuthService } from '../auth/services/Auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Role,
      UserRole,
      User,
      Firm,
      UserEmail,
      Land,
      Role,
    ]),
  ],
  providers: [
    UsersService,
    UserRepository,
    RoleRepository,
    WebhookHandlerService,
    UserWebhookService,
    AuthService,
  ],
  exports: [
    AuthService,
    UsersService,
    UserRepository,
    RoleRepository,
    WebhookHandlerService,
    UserWebhookService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
