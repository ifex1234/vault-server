import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  create(
    @Body()
    customerData: {
      firstName: string;
      lastName: string;
      otherName: string;
      email: string;
      phoneNumber: number;
    },
  ): Promise<CreateCustomerDto> {
    const { firstName, lastName, otherName, email, phoneNumber } = customerData;
    return this.prismaService.customer.create({
      data: { firstName, lastName, otherName, email, phoneNumber },
    });
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
