import { PartialType } from '@nestjs/mapped-types';
import { CreateVetoDto } from './create-veto.dto';

export class UpdateVetoDto extends PartialType(CreateVetoDto) {
  id: number;
}
