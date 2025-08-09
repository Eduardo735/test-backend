import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { QuoteService } from '../services/quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) { }

  @Post()
  createQuote(@Body() createReportDto: CreateQuoteDto) {
    try {
      if (createReportDto.area <= .01) {
        throw new Error(`No debe ser menor a una hectarea`);
      }
      if (createReportDto.area >= 10) {
        throw new Error(`No debe ser mayor a 10 hectareas`);
      }
      return this.quoteService.create(createReportDto);
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: e.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e.message
      });
    }

  }

  @Get()
  async findAllQuotes(@Query() query: PaginationQueryDto) {
    try {
      const [quotesPagination, total] = await this.quoteService.findAll(query);
      console.log('quotesPagination :>> ', quotesPagination);
      return {
        success: true,
        message: 'Success fetching quotes',
        data: { quotes: quotesPagination, total },
      };
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
