import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}
  async create(userId: number, createCustomerDto: CreateCustomerDto) {
    const data = await this.prisma.customer.create({
      data: { ...createCustomerDto, userId },
    });
    return data;
  }

  async findAll(email?: string) {
    return await this.prisma.customer.findMany({
      where: email ? { email } : {},
    });
  }

  findOne(id: number) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: number) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }
}
