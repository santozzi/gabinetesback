import { Test, TestingModule } from '@nestjs/testing';
import { WakeonlanController } from './wakeonlan.controller';

describe('WakeonlanController', () => {
  let controller: WakeonlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WakeonlanController],
    }).compile();

    controller = module.get<WakeonlanController>(WakeonlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
