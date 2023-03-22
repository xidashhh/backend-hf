import { IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UsersListParams {

  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  @Type(() => String)
  name: string;

  @IsInt()
  @Type(() => Number)
  age: number;
  
  @IsString()
  @Type(() => String)
  email: string;

}
