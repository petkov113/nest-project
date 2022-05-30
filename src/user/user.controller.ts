import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common'
import { UUID } from './decorators'
import { CreateUserDto } from './dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAll() {
    return this.usersService.getUsers()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:id')
  get(@Param('id') id: UUID) {
    return this.usersService.getUser(id)
  }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }
}
