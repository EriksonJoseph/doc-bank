import { Module } from '@nestjs/common';
import { PaymentChannelEntity } from 'src/entity/paymentChannel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentChannelController } from './payment-channel.controller';
import { PaymentChannelService } from './payment-channel.service';

@Module({
    imports:[TypeOrmModule.forFeature([PaymentChannelEntity])],
    controllers:[PaymentChannelController],
    providers:[PaymentChannelService],
    exports:[PaymentChannelService, TypeOrmModule]
})
export class PaymentChannelModule {}
