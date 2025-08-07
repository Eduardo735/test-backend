import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { QuoteRepository } from '../repositories/quote.repository';
import { UpdateReportDto } from '../dto/update-quote.dto';
import { DataSource } from 'typeorm';
import { Quote } from 'src/entities/Quote.entity';
import { Land } from 'src/entities/Land.entity';
import { Customer } from 'src/entities/Customer.entity';

@Injectable()
export class QuoteService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly quoteRepository: QuoteRepository,
  ) { }

  async create(dto: CreateQuoteDto) {
    return await this.dataSource.transaction(async manager => {
      // Create the Land entity first
      const land = manager.create(Land, {
        state: { id: dto.state_id },
        crop: dto.crop,
        validity: dto.validity,
        insured_amount: dto.insured_amount,
        dataLand: dto.land,
      });
      await manager.save(land);

      // Create the Quote entity and associate the Land
      const quote = manager.create(Quote, {
        customer_id: dto.customer_id,
        land: land,
        customer: { id: dto.customer_id },
      });
      await manager.save(quote);

      return quote;
    });
  }

  findAll(query: PaginationQueryDto) {
    const { limit = 10, offset = 1 } = query;
    return this.quoteRepository
      .findPaginationByUser(limit, offset)
      .then(([_tradingSetups, _total]) => {
        return [_tradingSetups, _total];
      });
  }

  findOne(id: string) {
    return this.quoteRepository.findOneById(id);
  }

  update(id: string, data: Partial<UpdateReportDto>) {
    return this.quoteRepository.updateQuote(id, data);
  }

  remove(id: string) {
    return this.quoteRepository.deleteQuote(id);
  }
}
