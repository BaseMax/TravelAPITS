import { Module } from '@nestjs/common';
import { CityModule } from './modules/city/city.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TouristPlacesModule } from './modules/tourist-places/tourist-places.module';
import { SharedModule } from './modules/shared/shared.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './modules/auth/guards/at.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CityModule,
    TouristPlacesModule,
    PrismaModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
