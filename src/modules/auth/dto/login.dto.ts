import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

class RoleDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @ValidateNested()
  @Type(() => RoleDto)
  @IsNotEmpty()
  role: RoleDto;
}

export interface User {
  id: string;
}
