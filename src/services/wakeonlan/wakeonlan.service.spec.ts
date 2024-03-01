import { Test, TestingModule } from '@nestjs/testing';
import { WakeonlanService } from './wakeonlan.service';

describe('WakeonlanService', () => {
  let service: WakeonlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WakeonlanService],
    }).compile();

    service = module.get<WakeonlanService>(WakeonlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
