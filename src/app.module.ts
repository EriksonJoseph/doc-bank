import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankBranchService } from './bank-branch/bank-branch.service';
import { BankBranchController } from './bank-branch/bank-branch.controller';
import { BankBranchModule } from './bank-branch/bank-branch.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ParameterModule } from './parameter/parameter.module';
import { ParameterController } from './parameter/parameter.controller';
import { ParameterService } from './parameter/parameter.service';
import { PaymentChannelController } from './payment-channel/payment-channel.controller';
import { PaymentChannelService } from './payment-channel/payment-channel.service';
import { PaymentChannelModule } from './payment-channel/payment-channel.module';
import { UserAuthorizationReversalModule } from './user-authorization-reversal/user-authorization-reversal.module';
import { UserAuthorizationReversalService } from './user-authorization-reversal/user-authorization-reversal.service';
import { UserAuthorizationReversalController } from './user-authorization-reversal/user-authorization-reversal.controller';
import { UserGroupModule } from './user-group/user-group.module';
import { UserGroupController } from './user-group/user-group.controller';
import { UserGroupService } from './user-group/user-group.service';
@Module({
  imports: [
    BankBranchModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.POSTGRES_HOST,
      port:parseInt(<string>process.env.POSTGRES_PORT), // must be int
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true,
    }),
    ParameterModule,
    PaymentChannelModule,
    UserAuthorizationReversalModule,
    UserGroupModule,
  ],
  controllers: [AppController, BankBranchController, ParameterController, PaymentChannelController, UserAuthorizationReversalController, UserGroupController],
  providers: [AppService, BankBranchService, ParameterService, PaymentChannelService, UserAuthorizationReversalService, UserGroupService],
})
export class AppModule {}
