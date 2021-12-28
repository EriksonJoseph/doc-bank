import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('bank_branch')
export class BankBranchEntity{
    @PrimaryGeneratedColumn()
    bankId:number;

    @Column()
    bankCode:number;

    @Column()
    bankNameCode:string;

    @Column({default:''})
    bankParentCode:string;

    @Column()
    bankNameEng:string;

    @Column()
    bankNameThai:string;

    @Column({default:''})
    remark:string;

    @Column()
    effectiveDate:Date;

    @Column()
    expiryDate:Date;

    @Column()
    createdBy:string;

    @Column()
    createdDate:Date;

    @Column({default:null})
    changeBy:string

    @Column({default:null})
    changeDate:Date;

}
