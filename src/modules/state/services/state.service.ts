import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateRepository } from '../repositories/state.repository';

@Injectable()
export class StateService {
  constructor(
    private readonly stateRepository: StateRepository,
  ) { }

  create(dto: CreateStateDto) {
    return this.stateRepository.createState(dto);
  }

  findAll() {
    return this.stateRepository
      .findAll();
  }
}
