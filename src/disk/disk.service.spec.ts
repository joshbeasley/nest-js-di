import { Test, TestingModule } from '@nestjs/testing';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

describe('DiskService', () => {
  let service: DiskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PowerModule],
      providers: [DiskService],
      exports: [DiskService]
    }).compile();

    service = module.get<DiskService>(DiskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
