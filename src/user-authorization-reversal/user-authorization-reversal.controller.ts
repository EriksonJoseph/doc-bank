import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserAuthorizationReversalEntity } from 'src/entity/userAuthorizationReversal.entity';
import { UserAuthorizationReversalService } from './user-authorization-reversal.service';

@Controller('user-authorization-reversal')
export class UserAuthorizationReversalController {
    constructor(private userAuth:UserAuthorizationReversalService){}

    @Post()
    postUserAuth(@Body() userAuth:UserAuthorizationReversalEntity){
        return this.userAuth.postUserAuth(userAuth)
    }

    @Get()
    getAllUserAuth(){
        return this.userAuth.getAllUserAuth()
    }

    @Get(':id')
    getOneUserAuth(@Param('id')id:number){
        return this.userAuth.getOneUserAuth(id)
    }
    
    @Put(':id')
    putUserAuth(@Param('id') id:number,@Body() userAuth:UserAuthorizationReversalEntity){
        return this.userAuth.putUserAuth(id, userAuth)
    }

    @Delete(':id')
    deleteUserAuth(@Param('id') id:number){
        return this.userAuth.deleteUserAuth(id)
    }
    
}

