import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthorizationReversalService } from './user-authorization-reversal.service';

describe('UserAuthorizationReversalService', () => {
  let service: UserAuthorizationReversalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuthorizationReversalService],
    }).compile();

    service = module.get<UserAuthorizationReversalService>(UserAuthorizationReversalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
