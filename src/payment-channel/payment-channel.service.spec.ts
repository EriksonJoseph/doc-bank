import { Test, TestingModule } from '@nestjs/testing';
import { PaymentChannelService } from './payment-channel.service';

describe('PaymentChannelService', () => {
  let service: PaymentChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentChannelService],
    }).compile();

    service = module.get<PaymentChannelService>(PaymentChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
