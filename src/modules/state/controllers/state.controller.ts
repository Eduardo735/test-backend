import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateService } from '../services/state.service';
import { Public } from 'src/modules/auth/decorators/public.decorator';


@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) { }


  @Post()
  @Public()
  createLand(@Body() createLandDto: CreateStateDto) {
    return this.stateService.create(createLandDto);
  }

  @Public()
  @Get()
  async findAllState() {
    try {
      const state = await this.stateService.findAll();
      return {
        success: true,
        message: 'Success fetching state',
        data: { state: state },
      };
    } catch (e: unknown) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }

  @Get(':id')
  async findOneState(@Param('id') id: string) {
    try {
      const state = await this.stateService.findOne(id);
      return {
        success: true,
        message: 'Success fetching state',
        data: { setup: state },
      };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }
}
