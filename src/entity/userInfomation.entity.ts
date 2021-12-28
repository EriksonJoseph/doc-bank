import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_infomation')
export class UserInfomation {
    @PrimaryGeneratedColumn()
    userCode:number;

    @Column()
    username:string;

    @Column()
    effectTime:Date;

    @Column()
    expiryTime:Date;

    @Column()
    locationCode:number;

    @Column()
    userGroup:string;

    @Column()
    createdBy:string;

    @Column()
    changeBy:string;

    @Column()
    createdDate:Date;

    @Column()
    changeby:string;

    @Column()
    changDate:Date;

    @Column({type:'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    createdAt:Date;

    @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
    updatedAt:Date;
}