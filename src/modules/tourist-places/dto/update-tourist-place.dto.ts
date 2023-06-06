import { PartialType } from '@nestjs/swagger';
import { CreateTouristPlaceDto } from './create-tourist-place.dto';

export class UpdateTouristPlaceDto extends PartialType(CreateTouristPlaceDto) {}
