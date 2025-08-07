import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { CreateStateDto } from '../dto/create-state.dto';
import { StateService } from '../services/state.service';


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
