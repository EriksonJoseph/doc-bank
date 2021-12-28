import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BankBranchEntity } from 'src/entity/bankBranch-.entity';
import { ObjectID } from 'typeorm';
import { BankBranchService } from './bank-branch.service';

@Controller('bank-branch')
export class BankBranchController {
    constructor(private bankBranchservice: BankBranchService){}

    @Post()
    postBankBranch(@Body() bankBranch:BankBranchEntity){
        const bankConvert = JSON.stringify(bankBranch)
        return this.bankBranchservice.postBankBranch(bankBranch)
        // return `This is posBankBranch action \n ${bankConvert}`
    }

    @Get()
    getBankBranchs(){
        return this.bankBranchservice.getBankBranchs()
        // return 'This is getBankBranch action'
    }

    @Get(':id')
    getOneBankBranch(@Param('id') id:ObjectID){
        return this.bankBranchservice.getOneBankBrach(id)
    }


    @Put(':id')
    putBankBranch(@Param('id') id:ObjectID, @Body() bankBranch:BankBranchEntity){
        // console.log(bankBranch)
        // const bankConvert = JSON.stringify(bankBranch)
        // console.log('bankConvert has been called')
        // console.log(bankConvert)
        // return `This id putBankBranch id:${id} \n @Body ${bankConvert} \n action`
        const updates = Object.keys(bankBranch) // to get every input updates keys
        const allowedUpdate = [
            'bankCode', 'bankNameCode', 'bankParentCode', 'bankNameEng',
            'bankNameThai', 'remark', 'effectiveDate', 'expiryDate',
            'cratedBy','changeBy','changeDate'
        ] // list of allowed keys
        const isValid = updates.every((update)=>allowedUpdate.includes(update))//if all of input keys are include in allowed list would return true
        if(!isValid){
            return 'Invalid input field'
        }else{
            return this.bankBranchservice.putBankBranch(id, bankBranch, updates)
        }
        
    }

    @Delete(':id')
    deleteBankBranch(@Param('id') id:ObjectID){
        return this.bankBranchservice.deleteBankBranch(id)
        // return `This is deleteBankBranch id:${id}`
    }
}
