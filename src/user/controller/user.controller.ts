import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService){}

  @Post('/')
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Get('/')
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.findOne(id)
    return user ? user : { message: 'User not found'};
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: UserDto): Promise<UserDto | { message: string }> {
    const userUpdate = await this.userService.update(id, user);
    return userUpdate ? userUpdate : { message: 'User not found'};
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDto | { message: string }> {
    const user = await this.userService.delete(id)
    return user ? user : { message: 'User not found'};
  }
}
