import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from 'src/entities/State.entity';
import { Repository } from 'typeorm';
import { CreateStateDto } from '../dto/create-state.dto';
import { UpdateStateDto } from '../dto/update-state.dto';

@Injectable()
export class StateRepository {
  constructor(
    @InjectRepository(State)
    private readonly repository: Repository<State>,
  ) { }

  async createState(dto: CreateStateDto): Promise<State> {
    const state = this.repository.create(dto);
    return await this.repository.save(state);
  }

  async findAll(): Promise<State[]> {
    return this.repository.find({
      order: { created_at: 'DESC' },
    });
  }
}
