import { Test, TestingModule } from '@nestjs/testing';
import { PaymentChannelController } from './payment-channel.controller';

describe('PaymentChannelController', () => {
  let controller: PaymentChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentChannelController],
    }).compile();

    controller = module.get<PaymentChannelController>(PaymentChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
