import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Public } from 'src/common/decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('cities')
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Public()
  @Get()
  findAll() {
    return this.cityService.findAll();
  }

  @Public()
  @Get('search/:q')
  search(@Param('q') cityName: string) {
    return this.cityService.search(cityName);
  }

  @Public()
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.cityService.findById(Number(id));
  }

  @Post()
  @ApiBearerAuth()
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Put(':id')
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(Number(id), updateCityDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  delete(@Param('id') id: string) {
    return this.cityService.delete(Number(id));
  }
}
