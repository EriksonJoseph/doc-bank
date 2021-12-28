import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParameterEnity } from 'src/entity/parameter.entity';
import { ObjectID } from 'typeorm';
import { ParameterService } from './parameter.service';

@Controller('parameter')
export class ParameterController {
    constructor(private parameter: ParameterService){}

    @Post()
    postParameter(@Body() parameter:ParameterEnity){
        console.log(parameter)
        return this.parameter.postParameter(parameter)
        // return 'This is post parameter action'
    }

    @Get()
    getParamers(){
        return this.parameter.getParameters()
        // return 'This is getParameter action'
    }

    @Get(':id')
    getOneParameter(@Param('id') id:ObjectID){
        return this.parameter.getOneParameter(id)
        // return `This id getOneParamer id:${id} action`
    }

    @Put(':id')
    putParameter(@Param('id') id:ObjectID, @Body() parameter:ParameterEnity){
        const updates = Object.keys(parameter)
        const allowedUpdate = [
            'parameterCode', 'description', 'value1', 'value2', 'value3',
            'value4', 'value5', 'effectiveDate', 'exipyDate', 'changeDate',
            'changeBy'
        ]
        const isValid = updates.every((update)=>allowedUpdate.includes(update))
        if(!isValid){
            return 'Invalid updates field'
        }else{
            this.parameter.putParameter(id,parameter)
        }
        return this.parameter.putParameter(id,parameter)
        // return `This is putParame`
    }

    @Delete(':id')
    deleteParameter(@Param('id') id:ObjectID){
        return this.parameter.deleteParameter(id)
        // return `This is deleteParameter id:${id} action`
    }
}
