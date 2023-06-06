import { Module } from '@nestjs/common';
import { TouristPlacesService } from './tourist-places.service';
import { TouristPlacesController } from './tourist-places.controller';
import { TouristPlacesRepository } from './tourist-place.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TouristPlacesController],
  providers: [TouristPlacesService, TouristPlacesRepository],
})
export class TouristPlacesModule {}
