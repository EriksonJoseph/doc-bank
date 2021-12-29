import { Module } from '@nestjs/common';
import { UserAuthorizationReversalService } from './user-authorization-reversal.service';
import { UserAuthorizationReversalController } from './user-authorization-reversal.controller';
import { UserAuthorizationReversalEntity } from 'src/entity/userAuthorizationReversal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserAuthorizationReversalEntity])],
  providers: [UserAuthorizationReversalService],
  controllers: [UserAuthorizationReversalController],
  exports:[UserAuthorizationReversalService, TypeOrmModule]
})
export class UserAuthorizationReversalModule {}
