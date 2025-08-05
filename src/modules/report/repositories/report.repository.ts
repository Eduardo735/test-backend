import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Report } from "src/entities/Report.entity";
import { Repository } from "typeorm";
import { CreateReportDto } from "../dto/create-report.dto";
import { UpdateReportDto } from "../dto/update-report.dto";

@Injectable()
export class ReportRepository {
    constructor(
        @InjectRepository(Report)
        private readonly repository: Repository<Report>) {
    }

    async createReport(dto: CreateReportDto): Promise<Report> {
        const tradingSetup = this.repository.create(dto);
        return await this.repository.save(tradingSetup);
    }

    async findPaginationByUser(limit = 10, page = 1): Promise<[Report[], number]> {
        const take = limit;
        const skip = (page - 1) * limit;

        return this.repository.findAndCount({
            relations: ["content"],
            take,
            skip,
            order: { created_at: 'DESC' },
        });
    }

    async findOneById(id: string): Promise<Report> {
        const tradingSetup = await this.repository.findOne({
            where: { id },
        });
        if (!tradingSetup) {
            throw new Error(`TradingSetup with id ${id} not found`);
        }
        return tradingSetup;
    }

    async updateReport(id: string, data: Partial<UpdateReportDto>): Promise<Report> {
        await this.repository.update(id, data);
        return this.findOneById(id);
    }

    async deleteReport(id: string): Promise<void> {
        await this.repository.delete(id);
    }

}