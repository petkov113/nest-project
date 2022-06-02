import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common'
import { UUID } from './decorators'
import { CreateUserDto, UpdateUserDto } from './dto'
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

  @Patch(':id')
  update(@Param() id: UUID, @Body() userDto: UpdateUserDto) {
    return this.usersService.updateUser(id, userDto)
  }
}
