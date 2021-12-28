import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_authorication_reversal')
export class UserAuthorizationReversal{
    @PrimaryGeneratedColumn()
    userCode:number

    @Column()
    userName:string;

    @Column()
    effecTime:Date;

    @Column()
    expiryTime:Date;

    @Column()
    locationCode:string;

    @Column()
    userGroup:string;

    @Column()
    createdBy:string;

    @Column()
    createdDate:Date;

    @Column()
    changeBy:string;

    @Column()
    changeDate:Date;

    @Column()
    assignUserRole:Array<string>;
}