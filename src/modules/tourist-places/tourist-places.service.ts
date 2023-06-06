import { Injectable } from '@nestjs/common';
import { CreateTouristPlaceDto } from './dto/create-tourist-place.dto';
import { UpdateTouristPlaceDto } from './dto/update-tourist-place.dto';
import { TouristPlacesRepository } from './tourist-place.repository';

@Injectable()
export class TouristPlacesService {
  constructor(private readonly touristPlaceRepo: TouristPlacesRepository) {}

  async findByCity(cityId: number) {
    return await this.touristPlaceRepo.findByCity(+cityId);
  }

  async create(createTouristPlaceDto: CreateTouristPlaceDto) {
    return await this.touristPlaceRepo.create(createTouristPlaceDto);
  }

  async findAll() {
    return await this.touristPlaceRepo.findAll();
  }

  async findOne(id: number) {
    return await this.touristPlaceRepo.findById(+id);
  }

  async update(id: number, updateTouristPlaceDto: UpdateTouristPlaceDto) {
    return await this.touristPlaceRepo.update(+id, updateTouristPlaceDto);
  }

  async remove(id: number) {
    return await this.touristPlaceRepo.delete(+id);
  }
}
