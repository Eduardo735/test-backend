import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateService } from '../services/state.service';


@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) { }


  @Post()
  createLand(@Body() createLandDto: CreateStateDto) {
    return this.stateService.create(createLandDto);
  }

  @Get()
  async findAllState() {
    try {
      const states = await this.stateService.findAll();
      return {
        success: true,
        message: 'Success fetching states',
        data: { states },
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
