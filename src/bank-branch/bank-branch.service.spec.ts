import { Test, TestingModule } from '@nestjs/testing';
import { BankBranchService } from './bank-branch.service';

describe('BankBranchService', () => {
  let service: BankBranchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankBranchService],
    }).compile();

    service = module.get<BankBranchService>(BankBranchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
