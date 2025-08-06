import {
  Body,
  Controller,
  Post,
  Scope,
  // UnauthorizedException,
} from '@nestjs/common';
import { ApiResponse } from 'src/shared/types/api-response';
import { LoginResponseDto } from '../dto/login-response.dto';
import { LoginDto, UserDto } from '../dto/login.dto';
import { AuthService } from '../services/Auth.service';

@Controller({
  path: 'auth',
  scope: Scope.REQUEST,
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body()
    loginDto: LoginDto,
  ): Promise<ApiResponse<LoginResponseDto>> {
    await this.authService.validateUser(loginDto.username, loginDto.password);

    // const token = this.authService.generateToken(user);

    // if (!token) {
    //   throw new UnauthorizedException('Invalid credentials');
    // }
    return {
      success: true,
      message: 'Login Success',
      data: {} as LoginResponseDto,
    };
  }

  @Post('register')
  async register(@Body() userDto: UserDto) {
    return {
      success: true,
      message: 'Sign Success',
      data: await this.authService.register(
        userDto.username,
        // userDto.password,
        // userDto.role.id,
      ),
    };
  }
}
