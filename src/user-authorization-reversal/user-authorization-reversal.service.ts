import { Injectable } from '@nestjs/common';
import { UserAuthorizationReversalEntity } from 'src/entity/userAuthorizationReversal.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';


@Injectable()
export class UserAuthorizationReversalService {
    constructor(
        @InjectRepository(UserAuthorizationReversalEntity)
        private userAuth:Repository<UserAuthorizationReversalEntity>
    ){}

    postUserAuth(userAuth:UserAuthorizationReversalEntity):Observable<UserAuthorizationReversalEntity>{
        const dateNow = new Date();
        userAuth.createdDate = dateNow;
        return from(this.userAuth.save(userAuth))
    }

    getAllUserAuth():Observable<UserAuthorizationReversalEntity[]>{
        return from(this.userAuth.find())
    }

    getOneUserAuth(id:number):Observable<UserAuthorizationReversalEntity>{
        return from(this.userAuth.findOne(id))
    }

    putUserAuth(id:number, userAuth:UserAuthorizationReversalEntity):Observable<UpdateResult>{
        return from(this.userAuth.update(id, userAuth))
    }

    deleteUserAuth(id:number):Observable<DeleteResult>{
        return from(this.userAuth.delete(id))
    }



}
