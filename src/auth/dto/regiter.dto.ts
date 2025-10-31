import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsString,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'PIN must be at least 4 characters long' })
  @MaxLength(4, { message: 'PIN must be at most 4 characters long' })
  pin: string;
}
