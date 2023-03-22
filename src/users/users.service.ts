import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { Users } from 'src/interfaces/users.interface';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './create-users.dto';




@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<Users>,
      ) {}

      nextId=0;

    private users: Users[] = [
        // {
        //     id: this.nextId++,
        //     name: "Buksi",
        //     age: 12,
        //     email:"asd@asd.com"
        // },

        // {
        //     id: this.nextId++,
        //     name: "Bundázós",
        //     age: 19,
        //     email:"bundazos.bunda@gmail.com"
        // },
    ];

 async create(usersDto: CreateUsersDto):Promise<void> {
   await this.userRepository.save(usersDto);
    
  }

   findAll():Promise<Users[]>{
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Users> {
    const user = this.userRepository.findOneBy({id});
    if (!user) {
        throw new NotFoundException();
    }
    return user;
  }

  async deleteUser(id: number){
    await this.userRepository.delete(id);
  }

  async updateUser(id: number, userDto: CreateUsersDto) {
    await this.userRepository.update(id, userDto)
  }
}
