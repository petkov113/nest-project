import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UUID } from './decorators'
import CreateUserDto from './dto/create-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getAll() {
    return this.usersService.getUsers()
  }

  @Get('/:id')
  get(@Param('id') id: UUID) {
    return this.usersService.getUser(id)
  }

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto)
  }
}
