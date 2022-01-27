import { Test, TestingModule } from '@nestjs/testing';
import { VetosController } from './vetos.controller';
import { VetosService } from './vetos.service';

describe('VetosController', () => {
  let controller: VetosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetosController],
      providers: [VetosService],
    }).compile();

    controller = module.get<VetosController>(VetosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
