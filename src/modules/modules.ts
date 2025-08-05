import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ClerkAuthGuard } from './auth/strategies/ClerkAuthGuard';
import { UsersModule } from './user/users.module';
import { ReportModule } from './report/report.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        AuthModule,
        ReportModule
    ],
    providers: [
        { provide: APP_GUARD, useClass: ClerkAuthGuard }
    ],
})
export class Modules {
}
