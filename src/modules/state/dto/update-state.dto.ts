import { IsString } from 'class-validator';

export class UpdateStateDto {
  @IsString()
  name: string;
}
