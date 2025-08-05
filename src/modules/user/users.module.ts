import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Bookmark } from 'src/entities/Bookmark.entity';
// import { Business } from 'src/entities/Business.entity';
// import { Company } from 'src/entities/Company.entity';
// import CompanyWatchlist from 'src/entities/CompanyWatchlist.entity';
// import { Doctor } from 'src/entities/Doctor.entity';
import { Firm } from 'src/entities/Firm.entity';
import { Report } from 'src/entities/Report.entity';
import ReportCompany from 'src/entities/ReportCompany.entity';
import { ReportContent } from 'src/entities/ReportContent.entity';
// import { Reward } from 'src/entities/Reward.entity';
import Role from 'src/entities/Role.entity';
// import { Star } from 'src/entities/Star.entity';
// import { Transaction } from 'src/entities/Transaction.entity';
import { User } from 'src/entities/User.entity';
// import { UserAudit } from 'src/entities/UserAudit.entity';
import UserEmail from 'src/entities/UserEmail.entity';
// import UserPhone from 'src/entities/UserPhone.entity';
import UserRole from 'src/entities/UserRole.entity';
// import UserSocialMedia from 'src/entities/UserSocialMedia.entity';
// import UserWatchlist from 'src/entities/UserWatchlist.entity';
// import Watchlist from 'src/entities/Watchlist.entity';
import { UsersController } from './controllers/users.controller';
import { RoleRepository } from './repositories/role.repository';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service';
// import { WebhookUserController } from './controllers/webhooks.controller';
import { WebhookHandlerService } from './services/webhook-handler.service';
import { UserWebhookService } from './services/user-webhook.service';
import { AuthService } from '../auth/services/Auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReportContent,
      // UserAudit,
      // Bookmark,
      Role,
      UserRole,
      User,
      Firm,
      // Star,
      // UserPhone,
      UserEmail,
      // UserSocialMedia,
      // UserWatchlist,
      // Watchlist,
      // CompanyWatchlist,
      // Company,
      Report,
      ReportCompany,
      // Transaction,
      // Reward, Business, Doctor, 
      Role
    ]),
  ],
  providers: [UsersService, UserRepository, RoleRepository, WebhookHandlerService, UserWebhookService, AuthService],
  exports: [AuthService, UsersService, UserRepository, RoleRepository, WebhookHandlerService, UserWebhookService],
  controllers: [UsersController],
})
export class UsersModule { }
