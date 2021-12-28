import { Test, TestingModule } from '@nestjs/testing';
import { UseOfPlayController } from './use-of-play.controller';

describe('UseOfPlayController', () => {
  let controller: UseOfPlayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UseOfPlayController],
    }).compile();

    controller = module.get<UseOfPlayController>(UseOfPlayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
