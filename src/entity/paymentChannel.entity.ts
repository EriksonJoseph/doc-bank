import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('payment_channel')
export class PaymentChannelEntity{
   @PrimaryColumn()
    channelId:number;

    @Column()
    description:string;

    @Column()
    userName:string;

    @Column()
    locationName:string;

    @Column()
    remark:string;

    @Column()
    effectiveDate:Date;

    @Column()
    expiryDate:Date;

    @Column()
    createdDate:Date;

    @Column({default:null})
    changeBy:string;

    @Column({default:null})
    changeDate:Date;

}