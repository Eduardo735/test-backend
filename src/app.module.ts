import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClerkClientProvider } from './modules/auth/providers/ClerkClientProvider';
import { Modules } from './modules/modules';
import asyncConfigTypeORM from './shared/infrastructure/typeorm/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () => await asyncConfigTypeORM(),
    }),
    Modules,
  ],
  controllers: [],
  exports: [Modules],
  providers: [ClerkClientProvider],
})
export class AppModule { }
