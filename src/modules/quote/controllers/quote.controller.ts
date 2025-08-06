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
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { QuoteService } from '../services/quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Post()
  createQuote(@Body() createReportDto: CreateQuoteDto) {
    console.log('createReportDto :>> ', createReportDto);
    return this.quoteService.create(createReportDto);
  }

  @Get()
  async findAllReports(@Query() query: PaginationQueryDto) {
    try {
      const [reportPagination, total] = await this.quoteService.findAll(query);
      return {
        success: true,
        message: 'Success fetching reports',
        data: { reports: reportPagination, total },
      };
    } catch (e: unknown) {
      return {
        success: false,
        message: e instanceof Error ? e.message : 'An unknown error occurred',
      };
    }
  }

  @Get(':id')
  async findOneReport(@Param('id') id: string) {
    try {
      const setup = await this.quoteService.findOne(id);
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
  updateReport(@Param('id') id: string, @Body() data: Partial<CreateQuoteDto>) {
    try {
      const report = this.quoteService.update(id, data);
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
      const report = this.quoteService.remove(id);
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
