import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateLandDto } from '../dto/create-land.dto';
import { LandService } from '../services/land.service';

@Controller('land')
export class LandController {
  constructor(private readonly landService: LandService) {}

  @Post()
  createLand(@Body() createLandDto: CreateLandDto) {
    // console.log('createReportDto :>> ', createLandDto);
    return this.landService.create(createLandDto);
  }

  @Get()
  async findAllLands(@Query() query: PaginationQueryDto) {
    try {
      const [landPagination, total] = await this.landService.findAll(query);
      return {
        success: true,
        message: 'Success fetching reports',
        data: { reports: landPagination, total },
      };
    } catch (e: unknown) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }

  @Get(':id')
  async findOneLand(@Param('id') id: string) {
    try {
      const setup = await this.landService.findOne(id);
      return {
        success: true,
        message: 'Success fetching reports',
        data: { setup },
      };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }

  @Patch(':id')
  updateReport(@Param('id') id: string, @Body() data: Partial<CreateLandDto>) {
    try {
      const report = this.landService.update(id, data);
      return {
        success: true,
        message: 'Success update report',
        data: { report },
      };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      const report = this.landService.remove(id);
      return {
        success: true,
        message: 'Success remove report',
        data: { report },
      };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }
}
