import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_group')
export class UserGroupEntity{
    @PrimaryGeneratedColumn()
    userGroupId:number

    @Column()
    userGroupName:string;

    @Column({default:null})
    effectiveDate:Date;

    @Column({default:null})
    expiryDate:Date;

    @Column()
    createdBy:string;

    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    createdDate:Date;

    @Column()
    changeBy:string;

    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    changeDate:Date;
}