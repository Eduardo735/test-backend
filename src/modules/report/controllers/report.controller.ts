import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { PaginationQueryDto } from "src/shared/dto/pagination-query.dto";
import { CreateReportDto } from "../dto/create-report.dto";
import { ReportService } from "../services/report.service";


@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @Post()
    createReport(@Body() createReportDto: CreateReportDto) {
        console.log('createReportDto :>> ', createReportDto);
        return this.reportService.create(createReportDto);
    }

    @Get()
    async findAllReports(@Query() query: PaginationQueryDto) {
        try {
            const [reportPagination, total] = await this.reportService.findAll(query);
            return {
                success: true,
                message: 'Success fetching reports',
                data: { reports: reportPagination, total },
            };
        } catch (e) {
            return {
                success: false,
                message: e.message,
            };
        }

    }

    @Get(':id')
    async findOneReport(@Param('id') id: string) {
        try {
            const setup = await this.reportService.findOne(id);
            return {
                success: true,
                message: 'Success fetching reports',
                data: { setup },
            };
        } catch (e) {
            return {
                success: false,
                message: e.message,
            };
        }
    }

    @Patch(':id')
    updateReport(@Param('id') id: string, @Body() data: Partial<CreateReportDto>) {
        try {
            const report = this.reportService.update(id, data);
            return {
                success: true,
                message: 'Success update report',
                data: { report },
            };
        } catch (e) {
            return {
                success: false,
                message: e.message,
            };
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {

        try {
            const report = this.reportService.remove(id);
            return {
                success: true,
                message: 'Success remove report',
                data: { report },
            };
        } catch (e) {
            return {
                success: false,
                message: e.message,
            };
        }
    }
}