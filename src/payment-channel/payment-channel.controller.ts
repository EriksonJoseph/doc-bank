import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PaymentChannelEntity } from 'src/entity/paymentChannel.entity';
import { ObjectID } from 'typeorm';
import { PaymentChannelService } from './payment-channel.service';

@Controller('payment-channel')
export class PaymentChannelController {
    constructor(private paymentChannel:PaymentChannelService){}

    @Post()
    postPaymentChannel(@Body() payment:PaymentChannelEntity){
        return this.paymentChannel.postPaymentChannel(payment)
        // return `This is postPaymentChannel action \n @Body : ${JSON.stringify(payment)}`
    }

    @Get()
    getPaymentChannels(){
        return this.paymentChannel.getPaymentChannels()
        // return 'this is getPaymentChannels action'
    }

    @Get(':id')
    getOnePaymentChannel(@Param('id') id:ObjectID){
        return this.paymentChannel.getOnePaymentChannels(id) // if provide invalid id the status code still be 200!
        // return 'this id getOnePaymentChannel'
    }

    @Put(':id')
    putPaymentChannel(@Param('id') id:ObjectID, @Body() payment:PaymentChannelEntity){
        const updates = Object.keys(payment)
        const allowedUpdate = [
            'description', 'userName', 'locationName', 'remark',
            'effectiveDate', 'expiryDate', 'changeBy', 'changeDate'
        ]
        const isValid = updates.every((update)=>allowedUpdate.includes(update))

        if(!isValid){
            return 'Invalid updates field'
        }else{
            return this.paymentChannel.putPaymentChannel(id, payment, updates)
        }
        
        // return 'this is putPaymentChannel action'
    }

    @Delete(':id')
    deletePaymentChannel(@Param('id') id:ObjectID){
        return this.paymentChannel.deletePaymentChannel(id)
        // return 'this is deletePaymentChannel action'
    }
}
