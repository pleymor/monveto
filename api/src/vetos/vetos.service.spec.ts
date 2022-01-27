import { Test, TestingModule } from '@nestjs/testing';
import { VetosService } from './vetos.service';

describe('VetosService', () => {
  let service: VetosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetosService],
    }).compile();

    service = module.get<VetosService>(VetosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
