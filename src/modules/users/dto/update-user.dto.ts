import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsDate,
  IsEmail,
  IsIn,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  name?: string;

  @IsString()
  @MaxLength(10)
  @MinLength(10)
  phone?: string;

  @IsEmail()
  email?: string;

  @IsDate()
  birthdate?: Date;

  @IsIn(['F', 'M'])
  gender?: string;
}
