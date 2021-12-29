import { Body, Controller, Post } from '@nestjs/common';
import { UserGroupEntity } from 'src/entity/userGroup.entity';
import { UserGroupService } from './user-group.service';

@Controller('user-group')
export class UserGroupController {
    constructor(private userGroup:UserGroupService){}

    @Post()
    postUserGroup(@Body() userGroup:UserGroupEntity){
        return userGroup
    }
}
