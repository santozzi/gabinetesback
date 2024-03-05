import { Test, TestingModule } from '@nestjs/testing';
import { ComercioPbController } from './comercio-pb.controller';

describe('ComercioPbController', () => {
  let controller: ComercioPbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComercioPbController],
    }).compile();

    controller = module.get<ComercioPbController>(ComercioPbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
