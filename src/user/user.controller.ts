import { Controller, Get, Param } from '@nestjs/common'
import { UUID } from './decorators'
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
}
