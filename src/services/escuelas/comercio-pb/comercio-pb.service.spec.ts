import { Test, TestingModule } from '@nestjs/testing';
import { ComercioPbService } from './comercio-pb.service';

describe('ComercioPbService', () => {
  let service: ComercioPbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComercioPbService],
    }).compile();

    service = module.get<ComercioPbService>(ComercioPbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
