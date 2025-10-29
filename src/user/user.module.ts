import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule for JWT strategy
import { UserService } from './user.service';

@Module({
  imports: [AuthModule], // Make sure AuthModule is imported to use JwtAuthGuard
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class UserModule {}
