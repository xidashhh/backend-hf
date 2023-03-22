import { IsNumber, IsString, isString } from "class-validator";

export class CreateUsersDto {

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    email: string;
  }