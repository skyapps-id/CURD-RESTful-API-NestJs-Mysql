import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ){}

  async create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }

  async update(id: string, user: UserDto): Promise<UserDto | null> {
    const findUser = await this.userRepository.findOne(id);
    if (!findUser) return null;
    await this.userRepository.update(
      id,
      user
    );
    return user;
  }

  async delete(id: string): Promise<UserDto | null> {
    const user = await this.userRepository.findOne(id);
    if (!user) return null;
    await this.userRepository.delete(id)
    return user;
  }
}
