import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService, PrismaService],
  imports: [PrismaModule],
  exports: [CustomersService],
})
export class CustomersModule {}
