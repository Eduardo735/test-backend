import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Report } from "src/entities/Report.entity";
// import { NotificationFactory } from "../credit-card/services/notification.factory";
// import { PositionSizeService } from "../position/services/position-size.service";
// import { FixedRiskStrategy } from "../position/services/position-size.strategy";
import { ReportController } from "./controllers/report.controller";
import { ReportRepository } from "./repositories/report.repository";
import { ReportService } from "./services/report.service";

@Module({
    imports: [TypeOrmModule.forFeature([Report])],
    controllers: [ReportController],
    providers: [ReportRepository, ReportService],
})

export class ReportModule { }