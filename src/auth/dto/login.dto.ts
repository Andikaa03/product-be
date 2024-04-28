import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter corrent email' })
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
