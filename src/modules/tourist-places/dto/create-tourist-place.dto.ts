import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTouristPlaceDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsOptional()
  image?: string;

  @ApiProperty()
  @IsNotEmpty()
  cityId: number;

  @ApiProperty()
  @IsOptional()
  location?: {
    latitude: number;
    longitude: number;
  };
}
