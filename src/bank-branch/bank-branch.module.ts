import { Module } from '@nestjs/common';
import { BankBranchEntity } from 'src/entity/bankBranch-.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankBranchController } from './bank-branch.controller';
import { BankBranchService } from './bank-branch.service';

@Module({
    imports:[TypeOrmModule.forFeature([BankBranchEntity])],
    controllers:[BankBranchController],
    providers:[BankBranchService],
    exports:[BankBranchService, TypeOrmModule]
})
export class BankBranchModule {}
