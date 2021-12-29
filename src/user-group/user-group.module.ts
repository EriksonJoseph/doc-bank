import { Module } from '@nestjs/common';
import { UserGroupEntity } from 'src/entity/userGroup.entity';
import { UserGroupController } from './user-group.controller';
import { UserGroupService } from './user-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserGroupEntity])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
  exports:[UserGroupService, TypeOrmModule]
})
export class UserGroupModule {}
