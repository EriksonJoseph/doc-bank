import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_location')
export class UserLocation{
    @PrimaryGeneratedColumn()
    order:number;

    @Column()
    locationCode:string;

    @Column()
    locationName:string;

    @Column()
    contactPerson:string;

    @Column()
    contactEmail:string;

    @Column()
    financialCode:string;

    @Column()
    phoneNumber:string;

    @Column()
    locationAddress:string;

    @Column()
    remark:string;

    @Column()
    zipCode:number;

    @Column()
    glGroupCode:string;

    @Column()
    glRegionCode:string;

    @Column()
    vatLoctDtEng:string;

    @Column()
    vatLoctDtTh:string;

    @Column()
    effectiveDate:Date;

    @Column()
    expiryDate:Date;

    @Column()
    createdDate:Date;

    @Column()
    createdBy:string;

    @Column()
    changeBy:string;

    @Column()
    changeDate:Date;

    @Column()
    locationType:string;
}