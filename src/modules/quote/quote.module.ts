import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Land } from 'src/entities/Land.entity';
import { QuoteController } from './controllers/quote.controller';
import { QuoteRepository } from './repositories/report.repository';
import { QuoteService } from './services/quote.service';

@Module({
  imports: [TypeOrmModule.forFeature([Land])],
  controllers: [QuoteController],
  providers: [QuoteRepository, QuoteService],
})
export class QuoteModule {}
