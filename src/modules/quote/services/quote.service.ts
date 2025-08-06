import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { QuoteRepository } from '../repositories/report.repository';
import { UpdateReportDto } from '../dto/update-quote.dto';

@Injectable()
export class QuoteService {
  constructor(
    private readonly quoteRepository: QuoteRepository,
    // private readonly notificationFactory: NotificationFactory,
    // private readonly positionSizeService: PositionSizeService
  ) {}

  create(dto: CreateQuoteDto) {
    return this.quoteRepository.createQuote(dto);
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
