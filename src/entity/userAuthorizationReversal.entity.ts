import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_authorication_reversal')
export class UserAuthorizationReversalEntity{
    @PrimaryGeneratedColumn()
    userCode:number

    @Column()
    userName:string;

    @Column()
    effectTime:Date;

    @Column()
    expiryTime:Date;

    @Column()
    locationCode:string;

    @Column()
    userGroup:string;

    @Column({default:''})
    createdBy:string;
 
    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    createdDate:Date;

    @Column({default:null})
    changeBy:string;

    @Column({type:'timestamp',default: () => 'CURRENT_TIMESTAMP'})
    changeDate:Date;

    @Column({default:null})
    assignUserRole:string;
}