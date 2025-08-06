import { IsOptional, IsString, IsUUID } from 'class-validator';

// export class QuoteContentDto {
//   @IsString()
//   markdown: string; // ajusta según campos reales de ReportContent
// }

export class CreateStateDto {
  @IsString()
  name: string;
}
