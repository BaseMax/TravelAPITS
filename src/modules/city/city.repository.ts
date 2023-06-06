import { Injectable } from '@nestjs/common';
import { City } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityRepository {
  constructor(private readonly prisma: PrismaService) {}

  search(cityName: string): Promise<City[] | null> {
    return this.prisma.city.findMany({
      where: {
        name: {
          contains: cityName,
        },
      },
    });
  }

  findAll(): Promise<City[]> {
    return this.prisma.city.findMany();
  }

  findById(id: number): Promise<City | null> {
    return this.prisma.city.findUnique({ where: { id } });
  }

  create(data: CreateCityDto): Promise<City> {
    return this.prisma.city.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  }

  update(id: number, data: UpdateCityDto): Promise<City> {
    return this.prisma.city.update({ where: { id }, data });
  }

  delete(id: number): Promise<City> {
    return this.prisma.city.delete({ where: { id } });
  }
}
