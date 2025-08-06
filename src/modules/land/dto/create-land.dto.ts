import { IsOptional, IsString, IsUUID } from 'class-validator';

// export class QuoteContentDto {
//   @IsString()
//   markdown: string; // ajusta según campos reales de ReportContent
// }

export class CreateLandDto {
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

  //   @IsOptional()
  //   @ValidateNested()
  //   @Type(() => ReportContentDto)
  //   content?: ReportContentDto;
}
