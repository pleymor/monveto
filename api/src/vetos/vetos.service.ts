import { Injectable } from '@nestjs/common';
import { CreateVetoDto } from './dto/create-veto.dto';
import { UpdateVetoDto } from './dto/update-veto.dto';

@Injectable()
export class VetosService {
  create(createVetoDto: CreateVetoDto) {
    return 'This action adds a new veto';
  }

  findAll() {
    return `This action returns all vetos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} veto`;
  }

  update(id: number, updateVetoDto: UpdateVetoDto) {
    return `This action updates a #${id} veto`;
  }

  remove(id: number) {
    return `This action removes a #${id} veto`;
  }
}
