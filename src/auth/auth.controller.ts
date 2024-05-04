import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body(ValidationPipe) registerDto: RegisterDto) {
    try {
      const token = await this.authService.register(registerDto);
      return token;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('/login')
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    try {
      const token = await this.authService.login(loginDto);
      return token;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
