import { Type } from "class-transformer";
import { IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { ReportContentDto } from "./create-report.dto";

export class UpdateReportDto {
    @IsString()
    name: string;

    @IsUUID()
    @IsOptional()
    user_id: string;

    // @IsOptional()
    // @IsArray()
    // @IsUUID('all', { each: true })
    // memberIds?: string[]; // solo ids de usuarios miembros

    // @IsOptional()
    // @ValidateNested({ each: true })
    // @Type(() => ReportCompanyDto)
    // report_companies?: ReportCompanyDto[];

    @IsOptional()
    @ValidateNested()
    @Type(() => ReportContentDto)
    content?: ReportContentDto;
}