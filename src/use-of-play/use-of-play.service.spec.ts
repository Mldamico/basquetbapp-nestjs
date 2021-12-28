import { Test, TestingModule } from '@nestjs/testing';
import { UseOfPlayService } from './use-of-play.service';

describe('UseOfPlayService', () => {
  let service: UseOfPlayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UseOfPlayService],
    }).compile();

    service = module.get<UseOfPlayService>(UseOfPlayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
