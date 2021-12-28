import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_group')
export class UserGroup{
    @PrimaryGeneratedColumn()
    userGroupId:number

    @Column()
    userGroupName:string;

    @Column()
    effectiveDate:Date;

    @Column()
    expiryDate:Date;

    @Column()
    createdBy:string;

    @Column()
    createdDate:Date;

    @Column()
    changeBy:string;

    @Column()
    changeDate:Date;
}