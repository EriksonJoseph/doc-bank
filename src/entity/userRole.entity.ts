import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity('payment_channel')
export class UserRole{
    @PrimaryGeneratedColumn()
    roleId:number;

    @Column()
    roleName:string;

    @Column()
    assignedGui:Array<string>;

    @Column()
    createdBy:string;

    @Column()
    createdDate:Date;

    @Column()
    changeBy:string;

    @Column()
    changeDate:Date;

    @Column()
    effectiveDate:Date;

    @Column()
    expirydate:Date;
}