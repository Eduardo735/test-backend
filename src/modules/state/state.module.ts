import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from 'src/entities/State.entity';
import { StateController } from './controllers/state.controller';
import { StateRepository } from './repositories/state.repository';
import { StateService } from './services/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController],
  providers: [StateRepository, StateService],
})
export class StateModule { }
