import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PaymentChannelEntity } from 'src/entity/paymentChannel.entity';
import { DeleteResult, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentChannelService {
    constructor(
        @InjectRepository(PaymentChannelEntity)
        private payment:Repository<PaymentChannelEntity>
    ){}

    postPaymentChannel(payment:PaymentChannelEntity):Observable<PaymentChannelEntity>{
        return from(this.payment.save(payment));
    }

    getPaymentChannels():Observable<PaymentChannelEntity[]>{
        return from(this.payment.find());
    }

    getOnePaymentChannels(id:ObjectID):Observable<PaymentChannelEntity>{
        return from(this.payment.findOne(id))
    }

    putPaymentChannel(id:ObjectID, payment:PaymentChannelEntity, updates:Array<string>):Observable<UpdateResult>{
        return from(this.payment.update(id,payment))
    }

    deletePaymentChannel(id:ObjectID):Observable<DeleteResult>{
        return from(this.payment.delete(id))
    }
}
