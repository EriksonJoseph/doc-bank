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
  ],
  controllers: [AppController, BankBranchController, ParameterController, PaymentChannelController],
  providers: [AppService, BankBranchService, ParameterService, PaymentChannelService],
})
export class AppModule {}
