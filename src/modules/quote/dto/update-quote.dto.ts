import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateReportDto {
  @IsString()
  name: string;
}
