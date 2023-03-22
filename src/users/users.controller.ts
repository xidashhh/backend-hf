import { Body, Controller, Get, Param, Post, Delete, Put} from '@nestjs/common';
import { Request } from 'express';
import { Users } from 'src/interfaces/users.interface';
import { CreateUsersDto } from './create-users.dto';
import { UsersService } from './users.service';
import { UsersListParams } from './UsersListParams';

@Controller('api/users')
export class UsersController { 
    constructor(private readonly usersService: UsersService) {}

    @Post('')
   async create(@Body() createUsersDto: CreateUsersDto): Promise<void> {
       await this.usersService.create(createUsersDto)
    }

    @Get()
     findAll():Promise<Users[]> {
     return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(Number(id));
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
      return this.usersService.deleteUser(Number(id))
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUser: CreateUsersDto){
      return this.usersService.updateUser(Number(id), updateUser)
    }
}