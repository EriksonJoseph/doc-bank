import { Body, Injectable } from '@nestjs/common';
import { ParameterEnity } from 'src/entity/parameter.entity';
import { DeleteResult, ObjectID, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class ParameterService {
    constructor(
        @InjectRepository(ParameterEnity)
        private parameter:Repository<ParameterEnity>
    ){}

    postParameter(@Body() parameter:ParameterEnity){
        return from(this.parameter.save(parameter))
    }

    getParameters():Observable<ParameterEnity[]>{
        return from(this.parameter.find())
    }

    getOneParameter(id:ObjectID):Observable<ParameterEnity>{
        return from(this.parameter.findOne(id))
    }

    putParameter(id:ObjectID, parameterInfo:ParameterEnity):Observable<UpdateResult>{
        return from(this.parameter.update(id, parameterInfo))
    }

    deleteParameter(id:ObjectID):Observable<DeleteResult>{
        return from(this.parameter.delete(id))
    }
}
