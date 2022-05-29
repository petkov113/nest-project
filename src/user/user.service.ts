import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UUID } from './decorators'
import { CreateUserDto } from './dto'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find()
  }

  async getUser(id: UUID) {
    const user = await this.userRepository.findOne(id)
    if (!user) {
      throw new BadRequestException('Invalid user')
    }
    return user
  }

  async createUser(userDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(userDto)
      await this.userRepository.insert(user)
      return user
    } catch {
      throw new BadRequestException('Invalid user')
    }
  }
}
