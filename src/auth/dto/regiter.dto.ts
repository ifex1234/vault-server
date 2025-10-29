import { IsEmail, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  firstName: string;

  @IsNotEmpty()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  lastName: string;

  @IsNumber()
  pin: number;
}
