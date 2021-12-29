import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthorizationReversalController } from './user-authorization-reversal.controller';

describe('UserAuthorizationReversalController', () => {
  let controller: UserAuthorizationReversalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAuthorizationReversalController],
    }).compile();

    controller = module.get<UserAuthorizationReversalController>(UserAuthorizationReversalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
