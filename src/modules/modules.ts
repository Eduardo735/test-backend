import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ClerkAuthGuard } from './auth/strategies/ClerkAuthGuard';
import { CustomerModule } from './customer/customer.module';
import { LandModule } from './land/land.module';
import { QuoteModule } from './quote/quote.module';
import { StateModule } from './state/state.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    QuoteModule,
    LandModule,
    StateModule,
    CustomerModule
  ],
  providers: [{ provide: APP_GUARD, useClass: ClerkAuthGuard }],
})
export class Modules { }
