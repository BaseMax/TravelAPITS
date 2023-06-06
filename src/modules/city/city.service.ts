import { Injectable } from '@nestjs/common';
import { City } from '.prisma/client';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityRepository } from './city.repository';

@Injectable()
export class CityService {
  constructor(private readonly cityRepository: CityRepository) {}

  async search(cityName: string): Promise<City[] | null> {
    return await this.cityRepository.search(cityName);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.findAll();
  }

  async findById(id: number): Promise<City | null> {
    return await this.cityRepository.findById(+id);
  }

  async create(createCityDto: CreateCityDto): Promise<City> {
    return await this.cityRepository.create(createCityDto);
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    return await this.cityRepository.update(+id, updateCityDto);
  }

  async delete(id: number): Promise<City> {
    return await this.cityRepository.delete(+id);
  }
}
