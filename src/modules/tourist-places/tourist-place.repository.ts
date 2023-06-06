import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TouristPlace } from '@prisma/client';
import { UpdateTouristPlaceDto } from './dto/update-tourist-place.dto';
import { CreateTouristPlaceDto } from './dto/create-tourist-place.dto';

@Injectable()
export class TouristPlacesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findByCity(id: number): Promise<TouristPlace[] | null> {
    return this.prisma.touristPlace.findMany({
      where: { cityId: id },
      include: { location: true, city: true },
    });
  }

  findById(id: number): Promise<TouristPlace> {
    return this.prisma.touristPlace.findUnique({ where: { id } });
  }

  create(data: CreateTouristPlaceDto) {
    return this.prisma.touristPlace.create({
      data: {
        name: data.name,
        description: data.description,
        image: data.image,
        city: { connect: { id: data.cityId } },
      },
    });
  }

  update(id: number, data: UpdateTouristPlaceDto) {
    return this.prisma.touristPlace.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        image: data.image,
      },
    });
  }

  delete(id: number) {
    return this.prisma.touristPlace.delete({ where: { id } });
  }
}
