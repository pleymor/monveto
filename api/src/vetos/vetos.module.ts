import { Module } from '@nestjs/common';
import { VetosService } from './vetos.service';
import { VetosController } from './vetos.controller';

@Module({
  controllers: [VetosController],
  providers: [VetosService]
})
export class VetosModule {}
