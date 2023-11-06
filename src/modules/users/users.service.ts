import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DBService } from '../shared/services/db/DB.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly DBService: DBService,
    private Logger: Logger,
  ) {}

  async create(data: CreateUserDto) {
    const user = await this.DBService.user.findUnique({
      where: { email: data.email },
    });

    if (!user)
      return await this.DBService.user.create({
        data: { ...data, birthdate: new Date(data.birthdate) },
      });

    this.Logger.error(`User with email ${data.email} already exists`);
    return {
      error: `User with email ${data.email} already exists`,
    };
  }

  async findAll() {
    return await this.DBService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.DBService.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.DBService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.DBService.user.delete({ where: { id } });
  }
}
