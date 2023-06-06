import { Module } from '@nestjs/common';
import { HashService } from './services/hash.service';

const providers = [HashService];

@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
