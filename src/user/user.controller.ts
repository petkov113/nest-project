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

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  getAll() {
    return this.usersService.getUsers()
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  get(@Param() id: UUID) {
    return this.usersService.getUser(id)
  }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }
}
