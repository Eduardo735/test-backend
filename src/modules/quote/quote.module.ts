import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'src/entities/Quote.entity';
import { QuoteController } from './controllers/quote.controller';
import { QuoteRepository } from './repositories/quote.repository';
import { QuoteService } from './services/quote.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuoteController],
  providers: [QuoteRepository, QuoteService],
})
export class QuoteModule { }
