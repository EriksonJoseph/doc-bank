import { Test, TestingModule } from '@nestjs/testing';
import { BankBranchController } from './bank-branch.controller';

describe('BankBranchController', () => {
  let controller: BankBranchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankBranchController],
    }).compile();

    controller = module.get<BankBranchController>(BankBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
