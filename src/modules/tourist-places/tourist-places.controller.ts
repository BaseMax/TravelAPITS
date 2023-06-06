import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TouristPlacesService } from './tourist-places.service';
import { CreateTouristPlaceDto } from './dto/create-tourist-place.dto';
import { UpdateTouristPlaceDto } from './dto/update-tourist-place.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators';

@ApiTags('tourist places')
@Controller('tourist-places')
export class TouristPlacesController {
  constructor(private readonly touristPlacesService: TouristPlacesService) {}

  @Public()
  @Get(':cityId')
  findByCity(@Param('cityId') id: number) {
    return this.touristPlacesService.findByCity(+id);
  }

  @Post()
  @ApiBearerAuth()
  create(@Body() createTouristPlaceDto: CreateTouristPlaceDto) {
    return this.touristPlacesService.create(createTouristPlaceDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.touristPlacesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.touristPlacesService.findOne(+id);
  }

  @Put(':id')
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateTouristPlaceDto: UpdateTouristPlaceDto,
  ) {
    return this.touristPlacesService.update(+id, updateTouristPlaceDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.touristPlacesService.remove(+id);
  }
}
