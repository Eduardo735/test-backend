import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'src/entities/Quote.entity';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { UpdateReportDto } from '../dto/update-quote.dto';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(Quote)
    private readonly repository: Repository<Quote>,
  ) { }

  async createQuote(dto: CreateQuoteDto): Promise<Quote> {
    const tradingSetup = this.repository.create(dto);
    return await this.repository.save(tradingSetup);
  }

  async findPaginationByUser(limit = 10, page = 1): Promise<[Quote[], number]> {
    const take = limit;
    const skip = (page - 1) * limit;

    return this.repository.findAndCount({
      relations: ['land', 'customer', 'land.state'],
      take,
      skip,
      order: { created_at: 'DESC' },
      select: {
        id: true,
        name: true,
        land: {
          id: true,
          state: {
            id: true,
            name: true,
          },
          dataLand: true,
        },
        created_at: true,
        customer: {
          id: true,
          name: true,
        },
      },
    });
  }

  async findOneById(id: string): Promise<Quote> {
    const tradingSetup = await this.repository.findOne({
      where: { id },
    });
    if (!tradingSetup) {
      throw new Error(`TradingSetup with id ${id} not found`);
    }
    return tradingSetup;
  }

  async updateQuote(id: string, data: Partial<UpdateReportDto>): Promise<Quote> {
    await this.repository.update(id, data);
    return this.findOneById(id);
  }

  async deleteQuote(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
