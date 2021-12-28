import { Module } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { ParameterController } from './parameter.controller';
import { ParameterEnity } from 'src/entity/parameter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ParameterEnity])],
  providers: [ParameterService],
  controllers: [ParameterController],
  exports:[ParameterService, TypeOrmModule]
})
export class ParameterModule {}
