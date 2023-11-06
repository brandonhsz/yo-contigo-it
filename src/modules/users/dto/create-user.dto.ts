import {
  IsEmail,
  IsISO8601,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(10)
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsISO8601()
  birthdate: string;

  @IsNotEmpty()
  @IsIn(['F', 'M'])
  gender: 'F' | 'M';
}
