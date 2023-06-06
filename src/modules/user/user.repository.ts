import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.prisma.user.findFirst({ where: { email: email } });
  }

  findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(user: Partial<User>) {
    return this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
