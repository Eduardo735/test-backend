import { Type } from 'class-transformer';
import {
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested
} from 'class-validator';

// Puedes crear DTOs anidados para relaciones si los necesitas más detallados
class ReportCompanyDto {
    @IsUUID()
    companyId: string; // ajusta esto según tu entidad ReportCompany
}

export class ReportContentDto {
    @IsString()
    markdown: string; // ajusta según campos reales de ReportContent
}

export class CreateReportDto {
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
