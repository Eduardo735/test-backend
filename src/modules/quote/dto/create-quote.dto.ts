import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateQuoteDto {

  @IsNumber()
  area: number;

  @IsUUID()
  customer_id: string;

  @IsUUID()
  state_id: string;

  @IsString()
  @IsOptional()
  crop: string;

  @IsString()
  @IsOptional()
  validity: string;

  @IsNumber()
  @IsOptional()
  insured_amount: number;

  @IsOptional()
  land?: Record<string, any>;
}
