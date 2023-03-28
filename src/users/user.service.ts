import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.create(user);
  }

  async update(id: number, user: UpdateUserDto): Promise<number> {
    const [effectedRows] = await this.userRepository.update(user, {
      where: { id },
    });
    return effectedRows;
  }
}
