import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameter')
export class ParameterEnity{
    @PrimaryGeneratedColumn()
    parameterId:number;

    @Column()
    parameterCode:string;

    @Column({default:""})
    description:string;

    @Column({default:""})
    value1:string;

    @Column({default:""})
    value2:string;

    @Column({default:""})
    value3:string;

    @Column({default:""})
    value4:string;

    @Column({default:""})
    value5:string;

    @Column()
    effectiveDate:Date;

    @Column()
    expiryDate:Date;

    @Column()
    createdBy:string;

    @Column()
    createdDate:Date;

    @Column({default:null})
    changeBy:string;

    @Column({default:null})
    changeDate:Date;

}