import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Land } from 'src/entities/Land.entity';
import { Repository } from 'typeorm';
import { CreateLandDto } from '../dto/create-land.dto';
import { UpdateLandDto } from '../dto/update-land.dto';

@Injectable()
export class LandRepository {
  constructor(
    @InjectRepository(Land)
    private readonly repository: Repository<Land>,
  ) {}

  async createLand(dto: CreateLandDto): Promise<Land> {
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

  async updateLand(id: string, data: Partial<UpdateLandDto>): Promise<Land> {
    await this.repository.update(id, data);
    return this.findOneById(id);
  }

  async deleteLand(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
