import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateLandDto } from '../dto/create-land.dto';
import { LandRepository } from '../repositories/land.repository';
import { UpdateLandDto } from '../dto/update-land.dto';

@Injectable()
export class LandService {
  constructor(
    private readonly quoteRepository: LandRepository,
  ) { }

  create(dto: CreateLandDto) {
    return this.quoteRepository.createLand(dto);
  }

  // findAll(query: PaginationQueryDto) {
  //   const { limit = 10, offset = 1 } = query;
  //   return this.quoteRepository
  //     .findPaginationByUser(limit, offset)
  //     .then(([_tradingSetups, _total]) => {
  //       return [_tradingSetups, _total];
  //     });
  // }

  // findOne(id: string) {
  //   return this.quoteRepository.findOneById(id);
  // }

  // update(id: string, data: Partial<UpdateLandDto>) {
  //   return this.quoteRepository.updateLand(id, data);
  // }

  // remove(id: string) {
  //   return this.quoteRepository.deleteLand(id);
  // }
}
