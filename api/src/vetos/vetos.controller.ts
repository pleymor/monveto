import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VetosService } from './vetos.service';
import { CreateVetoDto } from './dto/create-veto.dto';
import { UpdateVetoDto } from './dto/update-veto.dto';

@Controller()
export class VetosController {
  constructor(private readonly vetosService: VetosService) {}

  @MessagePattern('createVeto')
  create(@Payload() createVetoDto: CreateVetoDto) {
    return this.vetosService.create(createVetoDto);
  }

  @MessagePattern('findAllVetos')
  findAll() {
    return this.vetosService.findAll();
  }

  @MessagePattern('findOneVeto')
  findOne(@Payload() id: number) {
    return this.vetosService.findOne(id);
  }

  @MessagePattern('updateVeto')
  update(@Payload() updateVetoDto: UpdateVetoDto) {
    return this.vetosService.update(updateVetoDto.id, updateVetoDto);
  }

  @MessagePattern('removeVeto')
  remove(@Payload() id: number) {
    return this.vetosService.remove(id);
  }
}
