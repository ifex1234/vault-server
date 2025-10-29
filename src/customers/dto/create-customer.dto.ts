import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsUrl } from 'class-validator';
export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  otherName: string;

  @ApiProperty()
  @IsString()
  customerAddress: string | null;

  @ApiProperty()
  @IsString()
  customerBusinessAddress: string | null;

  @ApiProperty()
  @IsEmail()
  email: string | null;

  @ApiProperty()
  @IsEmail()
  creatorEmail: string | null;

  @ApiProperty()
  phoneNumber: number | null;

  @ApiProperty()
  BVN: number | null;

  @ApiProperty()
  NIN: number | null;
  @ApiProperty()
  customerDOB: Date | null;

  @ApiProperty()
  @IsUrl()
  @IsString()
  utilityBillUrl: string | null;

  @ApiProperty()
  @IsUrl()
  @IsString()
  identificationUrl: string | null;
}
