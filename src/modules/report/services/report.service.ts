import { Injectable } from "@nestjs/common";
import { PaginationQueryDto } from "src/shared/dto/pagination-query.dto";
import { CreateReportDto } from "../dto/create-report.dto";
import { ReportRepository } from "../repositories/report.repository";
import { UpdateReportDto } from "../dto/update-report.dto";

@Injectable()
export class ReportService {
    constructor(
        private readonly tradingSetupRepository: ReportRepository, // Assuming you have a TradingSetupRepository
        // private readonly notificationFactory: NotificationFactory,
        // private readonly positionSizeService: PositionSizeService
    ) { }

    create(dto: CreateReportDto) {
        return this.tradingSetupRepository.createReport(dto);
    }

    findAll(query: PaginationQueryDto) {
        const { limit = 10, offset = 1 } = query;
        return this.tradingSetupRepository.findPaginationByUser(limit, offset).then(([_tradingSetups, _total]) => {
            return [_tradingSetups, _total]
        });

    }

    findOne(id: string) {
        return this.tradingSetupRepository.findOneById(id);
    }

    update(id: string, data: Partial<UpdateReportDto>) {
        return this.tradingSetupRepository.updateReport(id, data);
    }

    remove(id: string) {
        return this.tradingSetupRepository.deleteReport(id);
    }
}