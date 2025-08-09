import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'src/entities/Quote.entity';
import { QuoteController } from './controllers/quote.controller';
import { SqsController } from './controllers/sqs.controller';
import { SqsMessageDao } from './dao/sqs-message.dao';
import { QuoteRepository } from './repositories/quote.repository';
import { QuoteService } from './services/quote.service';
import { SqsConsumerService } from './services/sqs.consumer.service';
import { SqsProducerService } from './services/sqs.producer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  controllers: [QuoteController, SqsController],
  providers: [QuoteRepository, QuoteService, SqsProducerService, SqsConsumerService, SqsMessageDao],
  exports: [SqsProducerService, SqsConsumerService],
})
export class QuoteModule { }
