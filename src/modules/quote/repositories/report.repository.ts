import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Land } from 'src/entities/Land.entity';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { UpdateReportDto } from '../dto/update-quote.dto';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(Land)
    private readonly repository: Repository<Land>,
  ) {}

  async createQuote(dto: CreateQuoteDto): Promise<Land> {
    const tradingSetup = this.repository.create(dto);
    return await this.repository.save(tradingSetup);
  }

  async findPaginationByUser(limit = 10, page = 1): Promise<[Land[], number]> {
    const take = limit;
    const skip = (page - 1) * limit;

    return this.repository.findAndCount({
      relations: ['content'],
      take,
      skip,
      order: { created_at: 'DESC' },
    });
  }

  async findOneById(id: string): Promise<Land> {
    const tradingSetup = await this.repository.findOne({
      where: { id },
    });
    if (!tradingSetup) {
      throw new Error(`TradingSetup with id ${id} not found`);
    }
    return tradingSetup;
  }

  async updateQuote(id: string, data: Partial<UpdateReportDto>): Promise<Land> {
    await this.repository.update(id, data);
    return this.findOneById(id);
  }

  async deleteQuote(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
