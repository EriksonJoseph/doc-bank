import { Body, Injectable } from '@nestjs/common';
import { BankBranchEntity } from 'src/entity/bankBranch-.entity';
import { DeleteResult, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { format } from 'path/posix';


@Injectable()
export class BankBranchService {
    constructor(
        @InjectRepository(BankBranchEntity)
        private bankBranch:Repository<BankBranchEntity>
    ){}

    postBankBranch(bank:BankBranchEntity): Observable<BankBranchEntity>{
        return from(this.bankBranch.save(bank));
    }

    getBankBranchs():Observable<BankBranchEntity[]>{
        const painationLim = 2
        const skip = 0

        return from(this.bankBranch.find({
            where:{
                bankNameEng:'siam comercial bank'
            },
            take:painationLim,
            skip: skip,
            order: { bankId:'ASC' }
        }));
    }

    getOneBankBrach(id:ObjectID):Observable<BankBranchEntity>{
        return from(this.bankBranch.findOne(id));
    }

    getBankBranchByCodition(limit:number,skip:number,order:string):Observable<BankBranchEntity[]>{
        return from(this.bankBranch.find({
            where:{
                bankNameEng:'siam comercial bank'
            },
            take:limit,
            skip: skip,
            order: { bankId:'ASC' }
        }));
    }

    putBankBranch(id:ObjectID, bankInfo:BankBranchEntity, updates?:Array<string>):Observable<UpdateResult>{    
        return from(this.bankBranch.update(id, bankInfo));
    }

    deleteBankBranch(id:ObjectID):Observable<DeleteResult>{
        return from(this.bankBranch.delete(id))
    }


}
